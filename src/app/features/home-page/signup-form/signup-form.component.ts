import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HomePageService } from '../services/home-page.service';
import { phoneNumberValidator, passwordValidator, usernameValidator } from '../../../shared/validators/signup-validators';
import { RegisterResponse } from '../model/home-page.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly homePageService: HomePageService,
    private readonly router: Router) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, usernameValidator]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      phoneNumber: ['', [Validators.required, phoneNumberValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]],
      rePassword: ['', Validators.required],
    });
  }

  getRegisterFormControls(controlName?: string) {
    return this.registerForm.controls[controlName];
  }

  onRegister() {
    if (this.registerForm.valid) {
      const dateOfBirth = this.getRegisterFormControls('dob').value;
      const signupRequest = {
        firstName: this.getRegisterFormControls('firstName').value,
        lastName: this.getRegisterFormControls('lastName').value,
        userName: this.getRegisterFormControls('userName').value,
        gender: this.getRegisterFormControls('gender').value,
        dob: `${dateOfBirth.day}/${dateOfBirth.month}/${dateOfBirth.year}`,
        phoneNumber: Number(this.getRegisterFormControls('phoneNumber').value),
        email: this.getRegisterFormControls('email').value,
        password: this.getRegisterFormControls('password').value,
        confirmPassword: this.getRegisterFormControls('rePassword').value
      };
      if (signupRequest.confirmPassword !== signupRequest.password) {
        this.getRegisterFormControls('rePassword').setErrors({ 'mismatch': true });
        return;
      }

      this.homePageService.signup(signupRequest).subscribe(
        (data: RegisterResponse) => {
          if (data) {
            if (data.usernameInvalid) {
              this.getRegisterFormControls('userName').setErrors({ 'exist': true });
            } else if (data.emailInvalid) {
              this.getRegisterFormControls('email').setErrors({ 'exist': true });
            } else {
              this.router.navigateByUrl('/login');
            }
          }
        },
        (error) => {
        },
        () => {
        }
      );
    } else {
      const formControls = Object.keys(this.registerForm.controls);
      formControls.map(item => this.setErrors(item));
    }
  }

  setErrors(controlName: string) {
    if (!this.getRegisterFormControls(controlName).value) {
      this.getRegisterFormControls(controlName).markAsTouched();
      this.getRegisterFormControls(controlName).setErrors({ 'required': true });
    }
  }

  getMaxDate() {
    const today = new Date();
    const minYear = new Date();
    minYear.setFullYear(today.getFullYear() - 18);
    return { year: minYear.getFullYear(), month: minYear.getMonth(), day: minYear.getDate() };
  }

}
