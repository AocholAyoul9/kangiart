import { Injectable } from '@angular/core';
import { Product } from '../modeles/prodcut/prodcut.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products: Product[] =[
    {
      id: 1,
      title: 'Ocean Dreams',
      description: 'A beautiful oil painting of ocean waves at sunset',
      price: 450,
      image: 'photo5.jpg',
      medium: 'Oil on Canvas',
      size: '24x36 in',
      year: 2023,
      inStock: true
    },
    {
      id: 2,
      title: 'Mountain Sunrise',
      description: 'Watercolor painting of mountains at sunrise',
      price: 300,
      image: 'photo2.jpg',
      medium: 'Watercolor',
      size: '18x24 in',
      year: 2022,
      inStock: true
    },
    {
      id: 3,
      title: 'Ocean Dreams',
      description: 'A beautiful oil painting of ocean waves at sunset',
      price: 450,
      image: 'photo4.jpg',
      medium: 'Oil on Canvas',
      size: '24x36 in',
      year: 2023,
      inStock: true
    },
    {
      id: 4,
      title: 'Mountain Sunrise',
      description: 'Watercolor painting of mountains at sunrise',
      price: 300,
      image: 'photo1.jpg',
      medium: 'Watercolor',
      size: '18x24 in',
      year: 2022,
      inStock: true
    },
  ]

  getProducts(): Product[]{
    return this.products;
  }

  getProductById(id: number): Product | undefined  {
    return this.products.find(prodcut=> prodcut.id == id);
  }
}
