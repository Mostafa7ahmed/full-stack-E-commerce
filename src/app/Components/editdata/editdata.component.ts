import { ToastService } from './../../Core/Service/toast.service';
import { UserService } from './../../Core/Service/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editdata',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , RouterLink],
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.scss']
})
export class EditdataComponent implements OnInit {
  userItems: any = {};
  isloading: boolean = false;
  selectedImage: string | ArrayBuffer | null = null;
  updateMe = new FormGroup({
    name: new FormControl('', [Validators.minLength(2), Validators.maxLength(20)]),
  });

  constructor(private _UserService: UserService, private _ToastService: ToastService , private _Router:Router) {}

  ngOnInit(): void {
    this.loaduserItems();
    this.updateMe.patchValue({
      name: this.userItems.name || '',
    });
  }

  loaduserItems(): void {
    const userData = localStorage.getItem('userData');
    const storedImage = localStorage.getItem('userImage');
    
    this.userItems = userData ? JSON.parse(userData) : {};
    this.selectedImage = storedImage ? storedImage : '../../../assets/Image/man.png';
  }

  updateData(formData: FormGroup): void {
    if (formData.valid) {
      this.isloading = true;
      this._UserService.updateMe(formData.value).subscribe({
        next: (res) => {
          localStorage.setItem('userData', JSON.stringify(res.user));
          this._ToastService.showToast("success", "تم تغير البينات");
          this._Router.navigate(["Personal/me"])
          this.isloading = false;
        },
        error: (err) => {
          this._ToastService.showToast("error", err.message);
          this.isloading = false;
        }
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
        if (this.selectedImage) {
          localStorage.setItem('userImage', this.selectedImage.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
