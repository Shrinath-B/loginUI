import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../model/home-page.interface';

@Injectable()
export class HomePageService {

  constructor(private readonly http: HttpClient) { }

  signup(userDetails: RegisterForm) {
    return this.http.post('http://localhost:4000/signup', userDetails);
  }

}
