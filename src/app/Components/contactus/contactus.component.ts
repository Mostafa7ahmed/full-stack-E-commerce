import { MessagaService } from './../../Core/Service/messaga.service';
import { BannerComponent } from './../banner/banner.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastService } from 'src/app/Core/Service/toast.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, BannerComponent, ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  constructor(
    private _messagaService: MessagaService,
    private _ToastService: ToastService
  ) {}
  bannerImage: string = 'assets/Image/bannerContact.png';
  titlePage: string = 'تواصل معانا';

  addmessage: FormGroup = new FormGroup({
    nameUser: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
    message: new FormControl(null, [Validators.required]),
  });

  AddMessage(data: FormGroup) {
    if (data.valid) {
      this._messagaService.addMessage(data.value).subscribe({
        next: (res) => {
          this._ToastService.showToast('success', 'تم ارسال الرسالة بنجاح');
          data.reset(); 
        },
        error: (err) => {
          this._ToastService.showToast('error', 'فشل في إرسال الرسالة');
        },
      });
    } else {
      this._ToastService.showToast(
        'error',
        'يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح'
      );
    }
  }

  ngOnInit(): void {}
}
