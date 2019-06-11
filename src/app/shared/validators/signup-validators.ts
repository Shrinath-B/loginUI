import { AbstractControl } from '@angular/forms';

export function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^([0-9]){10}$/.test(control.value);
    return valid ? null : { invalidNumber: { valid: false, value: control.value } };
}

export function passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,50})/.test(control.value);
    return valid ? null : { invalidPassword: { valid: false, value: control.value } };
}

export function usernameValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^\w+$/.test(control.value);
    return valid ? null : { invalideUsername: { valid: false, value: control.value } };
}
