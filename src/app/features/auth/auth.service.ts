import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated: boolean;
  private tokenExpirationDate: Date;
  private tokenData: Oauth2TokenData;
  private userData: any = null;


  constructor(public http: HttpClient, private router: Router) {
    this.tokenData = JSON.parse(localStorage.getItem('tokenData'));
    if (this.tokenData && this.tokenData.token) {
      this.authenticated = true;
      this.userData = this.tokenData.token;
    }
  }

  login(username: string, password: string) {
    const userDetails = {
      username,
      password
    };
    return this.http.post('http://localhost:4000/login', userDetails).pipe(
      tap(
        (data) => {
          this.tokenData = data;
          this.authenticated = true;
          this.userData = this.tokenData.token;
          localStorage.setItem('tokenData', JSON.stringify(this.tokenData));
          return this.tokenData;
        },
        (error) => {

        }
      )
    );
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public logout(): any {
    this.tokenData = new Oauth2TokenData();
    this.userData = null;
    this.tokenExpirationDate = null;
    localStorage.removeItem('tokenData');
    this.authenticated = false;
    this.router.navigate(['login']);
  }

}

export class Oauth2TokenData {
  token?: string = null;
}