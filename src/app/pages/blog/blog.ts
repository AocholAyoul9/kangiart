import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  imports: [CommonModule,RouterModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog implements OnInit{
 
  blogPosts: any;

  constructor(private blogService: BlogService){}

  ngOnInit(): void {
      
    this.blogPosts = this.blogService.getAllposts();
  }
}
