import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../modeles/prodcut/prodcut.module';
import { CartService } from '../../services/cart.service';
CartService

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


    cartItems: Product[] =[];
  
    subtotal = 0;
    constructor(private cartService: CartService){}
  
    ngOnInit(): void{
      this.cartItems = this.cartService.getCartItems();
    }

    removeItem(id:number){
      this.cartService.removeFromCart(id)
    }

    getTotal(){
      this.subtotal = this.cartService.getTotal();
    }
}
