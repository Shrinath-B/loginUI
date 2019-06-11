import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumberMask]'
})
export class NumberMaskDirective {

  @Input('appNumberMask') inputType: RegExp;

  constructor() { }

  @HostListener('keypress', ['$event']) onInput(e) {
    if (!parseInt(e.key)) {
      e.preventDefault();
    }
  }

}
