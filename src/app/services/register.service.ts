import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createUser(register: Register): Observable<Register> {
    return this.http.post<Register>('https://localhost:7281/api/register', register);
  }

  loginUser(login: Login) : Observable<Login> {
    return this.http.post<Login>('https://localhost:7281/api/login', login);
  }

}
