import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  artworks = [
    {
      title: 'Ocean Dreams',
      medium: 'Oil on Canvas',
      year: 2023,
      image: 'photo1.jpg',
    },
    {
      title: 'Mountain Sunrise',
      medium: 'Watercolor',
      year: 2022,
      image: 'photo2.jpg',
    },
    {
      title: 'Urban Jungle',
      medium: 'Acrylic',
      year: 2024,
      image: 'photo3.jpg',
    },
    {
      title: 'Silent Forest',
      medium: 'Digital Art',
      year: 2023,
      image: 'photo4.jpg',
    },
    {
      title: 'Desert Bloom',
      medium: 'Mixed Media',
      year: 2022,
      image: 'photo5.jpg',
    },
    {
      title: 'Cosmic Dance',
      medium: 'Oil on Canvas',
      year: 2024,
      image: 'photo7.jpg',
    },
  ];
}
