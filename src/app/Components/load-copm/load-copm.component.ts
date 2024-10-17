import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-load-copm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './load-copm.component.html',
  styleUrls: ['./load-copm.component.scss']
})
export class LoadCopmComponent {
 @Input() srcImage ="../../../assets/Image/cartempety.png";
 @Input() Title =""
}
