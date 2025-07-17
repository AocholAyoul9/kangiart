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
      image: 'https://picsum.photos/id/1018/400/500',
    },
    {
      title: 'Mountain Sunrise',
      medium: 'Watercolor',
      year: 2022,
      image: 'https://picsum.photos/id/1039/400/500',
    },
    {
      title: 'Urban Jungle',
      medium: 'Acrylic',
      year: 2024,
      image: 'https://picsum.photos/id/1040/400/500',
    },
    {
      title: 'Silent Forest',
      medium: 'Digital Art',
      year: 2023,
      image: 'https://picsum.photos/id/1043/400/500',
    },
    {
      title: 'Desert Bloom',
      medium: 'Mixed Media',
      year: 2022,
      image: 'https://picsum.photos/id/1047/400/500',
    },
    {
      title: 'Cosmic Dance',
      medium: 'Oil on Canvas',
      year: 2024,
      image: 'https://picsum.photos/id/1052/400/500',
    },
  ];
}
