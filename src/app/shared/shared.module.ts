import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { NumberMaskDirective } from './directives/number-mask.directive';
import { IdleDirective } from './directives/idle.directive';

@NgModule({
    declarations: [
        ToastMessageComponent,
        NumberMaskDirective,
        IdleDirective
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        ToastMessageComponent,
        NumberMaskDirective,
        IdleDirective
    ]
})
export class SharedModule { }
