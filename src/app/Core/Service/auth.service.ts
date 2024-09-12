import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { } 
  APiUrl: string = "https://ecommerce.routemisr.com/api/v1/auth/";

  userInfo: any;
  

//  Register
  Register(user: object):Observable<any>{
    return this.http.post(this.APiUrl +"signup",user)
  }
  
  // Signin
  Signin(user: object):Observable<any>{
    return this.http.post(this.APiUrl +"signin",user)
  }

  DecodeUser() {
    const encode = localStorage.getItem("userToken");
    if (encode != null) {
      const decoded = jwtDecode(encode);
      this.userInfo = decoded;
    }
      
  }

  // Forgot Password
  forgetPassword(forgetPasswordForm:any):Observable<any>{
    return this.http.post(this.APiUrl+'forgotPasswords',forgetPasswordForm);
  }
  



  verifyRestCode(verifyRestCode: any): Observable<any>{
    return this.http.post(this.APiUrl+'verifyResetCode',verifyRestCode);

  }
  
  resetPassword(resetPassword: any): Observable<any>{
    return this.http.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",resetPassword);

  }
  


  

  


}
