import { ToastService } from '../../../Core/Service/toast.service';
import { UserService } from '../../../Core/Service/user.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editpassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , RouterLink],
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.scss'],
})
export class EditpasswordComponent {
  changePasswordForm = new FormGroup({
    currentPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^[A-Z][a-zA-Z0-9@#$%^&+=]{7,}$/),
    ]),
  }, { validators: this.passwordMatchValidator });

  isloading = false;

  constructor(private _UserService: UserService, private _ToastService: ToastService,private _Router: Router) { }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const rePassword = control.get('rePassword')?.value;
    return password === rePassword ? null : { 'passwordMismatch': true };
  }

  changePassword(formData: FormGroup): void {
    if (formData.valid) {
      this.isloading = true;
      this._UserService.ChangePass(formData.value).subscribe({
        next: (res) => {
          localStorage.setItem("userToken", res.token);
          this._ToastService.showToast("success", "تم تغير كلمه المرور بنجاح");
          this._Router.navigate(["Personal/me"])

          this.isloading = false;
        },
        error: (err) => {
          this._ToastService.showToast("error", err.error.errors.msg);
          console.error(err);
          this.isloading = false;
        }
      });
    }
  }


}
