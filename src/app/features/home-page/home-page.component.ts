import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { HomePageService } from './services/home-page.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loginForm: FormGroup;
  loginFail: boolean;

  constructor(
    private readonly fb: FormBuilder,
    private readonly homePageService: HomePageService,
    private readonly router: Router, private readonly authService: AuthService) {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('dashboard');
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getLoginFormControls(controlName?: string) {
    return this.loginForm.controls[controlName];
  }

  onLogin() {
    this.loginFail = false;
    if (this.loginForm.valid) {
      this.authService.login(this.getLoginFormControls('username').value, this.getLoginFormControls('password').value).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigateByUrl('dashboard');
        },
        (error) => {
          this.loginFail = true;
          this.loginForm.reset();
        },
        () => {
        });
    } else {
      this.setErrors('username');
      this.setErrors('password');
    }
  }

  setErrors(controlName: string) {
    if (!this.getLoginFormControls(controlName).value) {
      this.getLoginFormControls(controlName).markAsTouched();
      this.getLoginFormControls(controlName).setErrors({ 'required': true });
    }
  }

}
