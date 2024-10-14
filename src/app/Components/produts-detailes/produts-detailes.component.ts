import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartMentService } from 'src/app/Core/Service/depart-ment.service';
import { Prodcuts } from 'src/app/Core/Interface/prodcuts';
import { DollarToRiyalPipe } from 'src/app/Core/Pipes/dollar-to-riyal.pipe';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-produts-detailes',
  standalone: true,
  imports: [CommonModule, DollarToRiyalPipe, ProductsComponent],
  templateUrl: './produts-detailes.component.html',
  styleUrls: ['./produts-detailes.component.scss']
})
export class ProdutsDetailesComponent implements OnInit {
  productId: string;
  subscription:any
  product: any ={};
  isLoading=false;

  sizes: string[] = ['SM', 'M', 'L', 'XL'];
  selectedSize: number | null = null;

  selectSize(index: number): void {
    this.selectedSize = index;
  }
  constructor(
    private _Router: Router,
    private _Route: ActivatedRoute,
  private _DepartMentService: DepartMentService
  
  ) {
    this.productId = this._Route.snapshot.paramMap.get('id')!;
  }


  loadProduct(productId: string) {
    this.isLoading = true;
    this.subscription = this._DepartMentService.getProductByID(productId).subscribe({
      next: (res) => {
        this.product = res;
        this.isLoading=false;

        console.log(this.product.Image)
      },
      error: (err) => {
        console.error('Error loading product:', err);
      },
    });
  }

  
  ngOnInit(): void {
    this.loadProduct(this.productId)
  }



  
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
