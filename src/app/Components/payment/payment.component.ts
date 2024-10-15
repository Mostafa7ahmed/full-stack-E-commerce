import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, BannerComponent],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  bannerImage: string = 'assets/Image/bannerContact.png';
  titlePage: string = 'الدفع';
}
