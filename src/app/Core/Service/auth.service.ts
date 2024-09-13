import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem("userToken") != null) {
      this.DecodeUser();
    }
   }  APiUrl: string = "https://ecommerce.routemisr.com/api/v1/auth/";

   userInfo=new BehaviorSubject(null);
  

//  Register
  Register(user: object):Observable<any>{
    return this._HttpClient.post(this.APiUrl +"signup",user)
  }
  
  // Signin
  Signin(user: object):Observable<any>{
    return this._HttpClient.post(this.APiUrl +"signin",user)
  }


  DecodeUser() {
    const encode = localStorage.getItem("userToken");
    if (encode != null) {
      const decoded:any = jwtDecode(encode);
      this.userInfo.next(decoded)

    }
      
  }
  // Forgot Password
  forgetPassword(forgetPasswordForm:any):Observable<any>{
    return this._HttpClient.post(this.APiUrl+'forgotPasswords',forgetPasswordForm);
  }
  



  verifyRestCode(verifyRestCode: any): Observable<any>{
    return this._HttpClient.post(this.APiUrl+'verifyResetCode',verifyRestCode);

  }
  
  resetPassword(resetPassword: any): Observable<any>{
    return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",resetPassword);

  }
  


  

  


}