import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appIdle]'
})
export class IdleDirective {

  isInterrupted = false;
  constructor(private elementRef: ElementRef) {
    this.emitEvent();
  }
  @Output()
  public interrupt = new EventEmitter<boolean>();

  @HostListener('mousemove')
  public onMove(targetElement) {
    this.isInterrupted = true;
  }
  @HostListener('mousedown')
  public onDown(targetElement) {
    this.isInterrupted = true;
  }
  @HostListener('keypress')
  public onKeypress(targetElement) {
    this.isInterrupted = true;
  }
  @HostListener('DOMMouseScroll')
  public onDOMScroll(targetElement) {
    this.isInterrupted = true;
  }
  @HostListener('mousewheel')
  public onWheel(targetElement) {
    this.isInterrupted = true;
  }

  emitEvent() {
    setInterval(() => {
      if (this.isInterrupted) {
        this.interrupt.emit(true);
        this.isInterrupted = false;
      }
    }, 1000);

  }
}
