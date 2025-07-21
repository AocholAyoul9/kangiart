import { Injectable } from '@angular/core';
import { Product } from '../modeles/prodcut/prodcut.module';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(prodcut: Product): void {
    this.cartItems.push(prodcut);
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
