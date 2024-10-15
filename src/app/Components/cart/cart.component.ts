import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DollarToRiyalPipe } from 'src/app/Core/Pipes/dollar-to-riyal.pipe';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, DollarToRiyalPipe, BannerComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItems: any[] = [];
  Items: any = {};
  bannerImage: string = 'assets/Image/bannerContact.png';
  titlePage: string = 'السلة';

  totalPrice: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.calculateTotalPrice();
  }

  loadCartItems(): void {
    const cartData = localStorage.getItem('cart');

    this.cartItems = cartData ? JSON.parse(cartData) : [];


    this.cartItems.forEach(item => {
      if (!item.quantity) {
        item.quantity = 1;
      }
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  addSameProduct(itemId: number): void {
    const item = this.cartItems.find(product => product.id === itemId);
    if (item) {
      item.quantity++;
      this.updateLocalStorage();
      this.calculateTotalPrice();
    }
  }
  removeSameProduct(itemId: number): void {
    const item = this.cartItems.find(product => product.id === itemId);
    if (item ) {
       if(item.quantity > 1){
        item.quantity--;
      this.updateLocalStorage();
      this.calculateTotalPrice();
       }
    }
  }
  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.updateLocalStorage();
    this.calculateTotalPrice();
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cart');
    this.totalPrice = 0;
  }

  continueShopping(): void {
    this.router.navigate(['/products']);
  }

  updateLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
