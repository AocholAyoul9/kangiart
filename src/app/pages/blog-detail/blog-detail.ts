import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetail implements OnInit{

  post: any;
  safeContent: SafeHtml | null = null;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private sanitizer: DomSanitizer
  ){};

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.post = this.blogService.getPostById(id);
      if(this.post){
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
      }
  }

}
