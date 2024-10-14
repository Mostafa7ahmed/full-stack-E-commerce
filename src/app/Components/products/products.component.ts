import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Prodcuts } from 'src/app/Core/Interface/prodcuts';
import { DollarToRiyalPipe } from 'src/app/Core/Pipes/dollar-to-riyal.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , DollarToRiyalPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
 @Input() Prodcuts:Prodcuts []=[];
 @Input()  isLoadingProduct:boolean=false;
 @Input()  IsRoute:boolean=false;
 constructor(private _Router:Router){}





 addedProducts: Set<number> = new Set();

 handleCartAction(item: any): void {
   if (this.isProductInCart(item.id)) {
     this.navigateToCart();
   } else {
     this.AddCart(item);
     this.addedProducts.add(item.id);
   }
 }
 
 AddCart(item: any): void {
   let cart = JSON.parse(localStorage.getItem('cart') || '[]');
   cart.push(item);
   localStorage.setItem('cart', JSON.stringify(cart));
   console.log(this.addedProducts)
 }
 
 isProductInCart(productId: number): boolean {
   return this.addedProducts.has(productId);
 }
 
 navigateToCart(): void {
   this._Router  .navigate(['/cart']);
 }


 
}
