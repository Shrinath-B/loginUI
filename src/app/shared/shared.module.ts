import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message/toast-message.component';

@NgModule({
    declarations: [ToastMessageComponent],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        ToastMessageComponent
    ]
})
export class SharedModule { }
