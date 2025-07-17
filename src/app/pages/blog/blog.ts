import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  blogPosts = [
  { 
    title: 'Finding Inspiration in Nature', 
    date: 'May 15, 2024', 
    category: 'Creative Process',
    excerpt: 'How hiking through forests transformed my approach to landscape painting...',
    image: 'https://picsum.photos/id/1001/600/400'
  },
  { 
    title: 'Mastering Color Theory', 
    date: 'April 2, 2024', 
    category: 'Techniques',
    excerpt: 'Practical guide to creating harmonious color palettes for your paintings...',
    image: 'https://picsum.photos/id/1033/600/400'
  },
  { 
    title: 'Digital vs Traditional Tools', 
    date: 'March 18, 2024', 
    category: 'Art Tools',
    excerpt: 'Comparing the creative experience across different artistic mediums...',
    image: 'https://picsum.photos/id/1024/600/400'
  }
];
}
