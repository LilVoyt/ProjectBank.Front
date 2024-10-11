import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
// import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  createUser(register: Register): Observable<Register> {
    return this.http.post<Register>('https://localhost:7281/register', register);
  }

  loginUser(login: Login) : Observable<Login> {
    return this.http.post<Login>('https://localhost:7281/login', login);
  }

  // signOut(){
  //   localStorage.clear();
  //   this.router.navigate(['login'])
  // }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }
  // storeRefreshToken(tokenValue: string){
  //   localStorage.setItem('refreshToken', tokenValue)
  // }

  getToken(){
    var res = localStorage.getItem('token');
    // console.log(res);
    return res;
  }
  // getRefreshToken(){
  //   return localStorage.getItem('refreshToken')
  // }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  // decodedToken(){
  //   const jwtHelper = new JwtHelperService();
  //   const token = this.getToken()!;
  //   console.log(jwtHelper.decodeToken(token))
  //   return jwtHelper.decodeToken(token)
  // }

  // getfullNameFromToken(){
  //   if(this.userPayload)
  //   return this.userPayload.name;
  // }

  // getRoleFromToken(){
  //   if(this.userPayload)
  //   return this.userPayload.role;
  // }

  // renewToken(tokenApi : TokenApiModel){
  //   return this.http.post<any>(`${this.baseUrl}refresh`, tokenApi)
  // }

}
