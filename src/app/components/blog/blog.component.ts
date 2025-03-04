import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BolgService } from '../../services/blog/bolg.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs: any[] = [];
  blog: any;

  blogService=inject(BolgService);

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.fetchBlogDetails(blogId);
    } else {
      // Handle the case where blogId is null
      console.error('Blog ID not found in route parameters');
    }
  }

  fetchBlogDetails(id: string): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
      this.blog = this.blogs.find(blog => blog.id === id);
    });
  }
}











