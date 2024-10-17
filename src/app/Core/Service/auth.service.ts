import { GloblaserviceService } from './globlaservice.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router, private APiUrl:GloblaserviceService) {
    if (localStorage.getItem("userToken") != null) {
      this.DecodeUser();
      console.log(this.userInfo)

    }
   }  
   

  

//  Register
  Register(user: object):Observable<any>{
    return this._HttpClient.post(this.APiUrl.baseUrl +this.APiUrl.authRoute+"signup",user)
  }
  
  // Signin
  Signin(user: object):Observable<any>{
    return this._HttpClient.post(this.APiUrl.baseUrl +this.APiUrl.authRoute +"signin",user)
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
    return this._HttpClient.post(this.APiUrl.baseUrl +this.APiUrl.authRoute +'forgotPasswords',forgetPasswordForm);
  }
  



  verifyRestCode(verifyRestCode: any): Observable<any>{
    return this._HttpClient.post(this.APiUrl.baseUrl +this.APiUrl.authRoute+'verifyResetCode',verifyRestCode);

  }
  
  resetPassword(resetPassword: any): Observable<any>{
    return this._HttpClient.put(this.APiUrl.baseUrl + this.APiUrl.authRoute +'resetPassword',resetPassword);

  }
  



  logOut():void {
    localStorage.removeItem("userToken");
    this.userInfo.next(null)
    this._Router.navigate(['/login'])


  }

  


}