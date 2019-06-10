import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit, OnChanges {

  @Input() messageType: string;
  @Input() message: string;

  @Input() showToast: boolean;


  headerMessage: string;

  constructor() { }

  ngOnInit() {
    if (this.messageType === 'error') {
      this.headerMessage = 'Error';
    } else if (this.headerMessage === 'warning') {
      this.headerMessage = 'Warning';
    } else if (this.headerMessage === 'success') {
      this.headerMessage = 'Success';
    }
  }

  ngOnChanges() {
    if (this.messageType === 'error') {
      this.headerMessage = 'Error';
    } else if (this.headerMessage === 'warning') {
      this.headerMessage = 'Warning';
    } else if (this.headerMessage === 'success') {
      this.headerMessage = 'Success';
    }
    console.log(this.showToast);
  }

}
