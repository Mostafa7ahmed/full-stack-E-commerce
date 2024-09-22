import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Prodcuts } from 'src/app/Core/Interface/prodcuts';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
 @Input() Prodcuts:Prodcuts []=[];
 @Input()  isLoadingProduct:boolean=false;

 cart = JSON.parse(localStorage.getItem('cart') || '[]');

 AddCart(data: any) {
  this.cart.push(data);
  localStorage.setItem('cart', JSON.stringify(this.cart));
 }
}
