import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-controal',
  standalone: true,
  imports: [CommonModule , NavbarComponent, RouterOutlet , FooterComponent],
  templateUrl: './controal.component.html',
  styleUrls: ['./controal.component.scss']
})
export class ControalComponent {

}
