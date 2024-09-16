import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-controal',
  standalone: true,
  imports: [CommonModule , NavbarComponent, RouterOutlet],
  templateUrl: './controal.component.html',
  styleUrls: ['./controal.component.scss']
})
export class ControalComponent {

}
