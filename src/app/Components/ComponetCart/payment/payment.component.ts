import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "../../banner/banner.component";
import { DollarToRiyalPipe } from 'src/app/Core/Pipes/dollar-to-riyal.pipe';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, BannerComponent, DollarToRiyalPipe, RouterLink],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  bannerImage: string = 'assets/Image/bannerContact.png';
  titlePage: string = 'الدفع';
   totalPrice = JSON.parse(localStorage.getItem('totalPrice') || '0');

    constructor(private router: Router){}

    clearCart(): void {
      localStorage.removeItem('cart');
      localStorage.removeItem('totalPrice'); 
      this.totalPrice = 0;
      this.router.navigate(['/Done']); 
    }
 
}
