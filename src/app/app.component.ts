import { Component } from '@angular/core';
import { AuthService } from './features/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  timeOut: any;
  idleState = 'Not started.';
  timeOutWarning: any;

  constructor(readonly authService: AuthService, private readonly router: Router, private toaster: ToastrService) { }

  logout() {
    this.authService.logout();
  }

  interrupt() {
    if (this.router.url !== '/login') {
      if (this.timeOut != null) {
        clearTimeout(this.timeOut);
        clearTimeout(this.timeOutWarning);
      }

      this.timeOut = setTimeout(() => {
        console.log(`Logging out...`);
        this.logout();
      }, 300000);

      this.timeOutWarning = setTimeout(() => {
        console.log(`Warning`);
        this.startTimeOutWarn();
      }, 180000);
    }
  }

  startTimeOutWarn() {
    const loggedoutTime: Date = new Date();
    loggedoutTime.setSeconds(loggedoutTime.getSeconds() + 120);
    this.idleState = `You will be logged out in another 2 minutes if you are idle!`;
    this.toaster.warning(this.idleState, 'Warning', {
      closeButton: true
    });
  }

}
