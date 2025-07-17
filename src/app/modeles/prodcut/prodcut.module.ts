import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ProdcutModule {}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  medium: string;
  size: string;
  year: number;
  inStock: boolean;
}
