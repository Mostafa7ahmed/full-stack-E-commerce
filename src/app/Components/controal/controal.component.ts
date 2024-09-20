import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-controal',
  standalone: true,
  imports: [CommonModule , NavbarComponent, RouterOutlet],
  templateUrl: './controal.component.html',
  styleUrls: ['./controal.component.scss']
})
export class ControalComponent {

}
