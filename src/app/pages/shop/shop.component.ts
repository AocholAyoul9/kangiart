import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modeles/prodcut/prodcut.module';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-shop',
  imports: [CommonModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {

  products: Product[] =[];

  constructor(private productService: ProductService){}

  ngOnInit(): void{
    this.products = this.productService.getProducts();
  }

}
