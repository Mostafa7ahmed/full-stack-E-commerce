import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToastService } from 'src/app/Core/Service/toast.service';
import { AuthService } from 'src/app/Core/Service/auth.service';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet , RouterLinkActive],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
 
  isExpanded = false;
  constructor(private _AuthService:AuthService,private ToastService:ToastService){}

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }



  callLogOut() {
    this.ToastService.showToast("success", "تم تسجيل خروجك بنجاح");
    this._AuthService.logOut()
  }

}
