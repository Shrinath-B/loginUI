import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomePageService {

  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string) {
    const userDetails = {
      username,
      password
    }
    return this.http.post('http://localhost:4000/login', userDetails);
  }

}
