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
     {
      title: 'Ocean Dreams',
      medium: 'Oil on Canvas',
      year: 2023,
      image: 'photo8.jpg',
    },
    {
      title: 'Mountain Sunrise',
      medium: 'Watercolor',
      year: 2022,
      image: 'photo20.jpg',
    },
    {
      title: 'Urban Jungle',
      medium: 'Acrylic',
      year: 2024,
      image: 'photo10.jpg',
    },
    {
      title: 'Silent Forest',
      medium: 'Digital Art',
      year: 2023,
      image: 'photo11.jpg',
    },
    {
      title: 'Desert Bloom',
      medium: 'Mixed Media',
      year: 2022,
      image: 'photo12.jpg',
    },
    {
      title: 'Cosmic Dance',
      medium: 'Oil on Canvas',
      year: 2024,
      image: 'photo13.jpg',
    },
     {
      title: 'Ocean Dreams',
      medium: 'Oil on Canvas',
      year: 2023,
      image: 'photo14.jpg',
    },
    {
      title: 'Mountain Sunrise',
      medium: 'Watercolor',
      year: 2022,
      image: 'photo15.jpg',
    },
    {
      title: 'Urban Jungle',
      medium: 'Acrylic',
      year: 2024,
      image: 'photo16.jpg',
    },
    {
      title: 'Silent Forest',
      medium: 'Digital Art',
      year: 2023,
      image: 'photo22.jpg',
    },
    {
      title: 'Desert Bloom',
      medium: 'Mixed Media',
      year: 2022,
      image: 'photo18.jpg',
    },
    {
      title: 'Cosmic Dance',
      medium: 'Oil on Canvas',
      year: 2024,
      image: 'photo19.jpg',
    },
     {
      title: 'Ocean Dreams',
      medium: 'Oil on Canvas',
      year: 2023,
      image: 'photo20.jpg',
    },
    {
      title: 'Mountain Sunrise',
      medium: 'Watercolor',
      year: 2022,
      image: 'photo21.jpg',
    },
    {
      title: 'Urban Jungle',
      medium: 'Acrylic',
      year: 2024,
      image: 'photo23.jpg',
    },
    {
      title: 'Silent Forest',
      medium: 'Digital Art',
      year: 2023,
      image: 'photo27.jpg',
    },
    {
      title: 'Desert Bloom',
      medium: 'Mixed Media',
      year: 2022,
      image: 'photo25.jpg',
    },
    {
      title: 'Cosmic Dance',
      medium: 'Oil on Canvas',
      year: 2024,
      image: 'photo26.jpg',
    },
     {
      title: 'Ocean Dreams',
      medium: 'Oil on Canvas',
      year: 2023,
      image: 'photo28.jpg',
    },
    {
      title: 'Mountain Sunrise',
      medium: 'Watercolor',
      year: 2022,
      image: 'photo29.jpg',
    },
    {
      title: 'Urban Jungle',
      medium: 'Acrylic',
      year: 2024,
      image: 'photo30.jpg',
    },
    {
      title: 'Silent Forest',
      medium: 'Digital Art',
      year: 2023,
      image: 'photo35.jpg',
    },
    {
      title: 'Desert Bloom',
      medium: 'Mixed Media',
      year: 2022,
      image: 'photo32.jpg',
    },
    {
      title: 'Cosmic Dance',
      medium: 'Oil on Canvas',
      year: 2024,
      image: 'photo33.jpg',
    },
     {
      title: 'Ocean Dreams',
      medium: 'Oil on Canvas',
      year: 2023,
      image: 'photo36.jpg',
    },
    {
      title: 'Mountain Sunrise',
      medium: 'Watercolor',
      year: 2022,
      image: 'photo37.jpg',
    },
    {
      title: 'Urban Jungle',
      medium: 'Acrylic',
      year: 2024,
      image: 'photo6.jpg',
    },
    {
      title: 'Silent Forest',
      medium: 'Digital Art',
      year: 2023,
      image: 'photo44.jpg',
    },
    {
      title: 'Desert Bloom',
      medium: 'Mixed Media',
      year: 2022,
      image: 'photo40.jpg',
    },
    {
      title: 'Cosmic Dance',
      medium: 'Oil on Canvas',
      year: 2024,
      image: 'photo42.jpg',
    },
  ];

  lightboxOpen = false;
  currentIndex = 0;

  get currentArtwork() {
    return this.artworks[this.currentIndex];
  }

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
  }

  closelightbox() {
    this.lightboxOpen = !this.lightboxOpen;
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.artworks.length;
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex =(this.currentIndex -1 + this.artworks.length) % this.artworks.length;
  }
}
