import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadCopmComponent } from "../../load-copm/load-copm.component";

@Component({
  selector: 'app-donepayment',
  standalone: true,
  imports: [CommonModule, LoadCopmComponent],
  templateUrl: './donepayment.component.html',
  styleUrls: ['./donepayment.component.scss']
})
export class DonepaymentComponent {

}
