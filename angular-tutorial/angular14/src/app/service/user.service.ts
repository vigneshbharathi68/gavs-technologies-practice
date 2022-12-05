import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  proceedLogin(user: any) {
    return this.http.post('http://localhost:3000/User/Authenticate', user);
  }
}
