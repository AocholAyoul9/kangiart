import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterLink,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  menuOpen = false;
  cartItemCount = 0;

   /* constructor(private cartService: CartService) {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
    });
  }*/

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
    if(this.menuOpen){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = '';
    }
  }
}
