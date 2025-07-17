import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterLink,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  menuOpen = false;

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
    if(this.menuOpen){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = '';
    }
  }
}
