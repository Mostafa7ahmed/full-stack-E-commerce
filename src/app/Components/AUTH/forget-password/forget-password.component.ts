import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/Core/Service/auth.service';
import { ToastService } from 'src/app/Core/Service/toast.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule , RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  message: string = '';
  isloading = false;

  forgetpasswordform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ResetCodeform: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required]),
  });

  newPasswordform: FormGroup = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/)
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private _AuthService: AuthService, private router: Router ,private _ToastService :ToastService) {}


  handelforgetpassword(): void {
    this.isloading = true;
    let emailinfo = this.forgetpasswordform.value;

    this._AuthService.forgetPassword(emailinfo).subscribe({
      next: (response) => {
        console.log(response);
        this.isloading = false;
        this._ToastService.showToast('success', 'تفقد بريدك الالكتروني');
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        console.log(err);
        this.isloading = false;
        this.message = err.error.message;
        this._ToastService.showToast('error', err.error.message);
      },
    });
  }

  hanelResetCode() {
    this.isloading = true;
    let resetCode = this.ResetCodeform.value;

    this._AuthService.verifyRestCode(resetCode).subscribe({
      next: (response) => {
        console.log(response);
        this.isloading = false;
        this._ToastService.showToast('success', 'تم التحقق من الكود');
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        console.log(err);
        this.isloading = false;
        this._ToastService.showToast('error', err.error.message);
        this.message = err.error.message;
      },
    });
  }

  handelnewPassword() {
    this.isloading = true;
    let newPassword = this.newPasswordform.value;
   console.log(newPassword)
    this._AuthService.resetPassword(newPassword).subscribe({
      next: (response) => {
        console.log(response);
        this.isloading = false;
        if (response.token) {
          localStorage.setItem("userToken", response.token);
          this.message = 'password reset successfully';
          this._ToastService.showToast('success', 'تم تغيير كلمة المرور');
          this.step3 = false;
          this.router.navigate(['/login']);
        }
      },
      error: (err) => {
        console.log(err);
        this.isloading = false;
        this._ToastService.showToast('error', err.error.message);
        this.message = err.error.message;
      },
    });
  }
}
