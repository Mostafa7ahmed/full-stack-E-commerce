import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferNavComponent } from '../offer-nav/offer-nav.component';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OfferNavComponent, NavbarComponent],

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
