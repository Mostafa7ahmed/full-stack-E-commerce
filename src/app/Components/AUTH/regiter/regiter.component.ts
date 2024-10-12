import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/Core/Service/auth.service';
import { ToastService } from 'src/app/Core/Service/toast.service';

@Component({
  selector: 'app-regiter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule , RouterLink],
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent  {
  constructor(private authService: AuthService, private _Router: Router , private _ToastService :ToastService) { }

  isloading: boolean = false;


  passwordFieldType: boolean = true;
  rePasswordFieldType: boolean = true;

  regsiterform: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40)
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.min(8),
      Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/)
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.min(8),
      Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/)
    ]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  });

  Regiter(formInfo: FormGroup) {
     this.isloading = true;
    this.authService.Register(formInfo.value).subscribe((res) => {
      if (res.message === "success") {
        this.isloading = false;
        this._ToastService.showToast("success", "Resiter in successfully");
        this._Router.navigate(['/login']);
      } 
    },
      (error) => {
        this.isloading = false;
        this._ToastService.showToast ("error" ,error.error.message);        
 
    })
   
  }
  

  
  togglePasswordVisibility() {
    this.passwordFieldType = !this.passwordFieldType;
  }

  toggleRePasswordVisibility() {
    this.rePasswordFieldType = !this.rePasswordFieldType;
  }

  


 
}
