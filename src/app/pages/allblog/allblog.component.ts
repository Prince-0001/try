import { Component, inject } from '@angular/core';
import { BolgService } from '../../services/blog/bolg.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-allblog',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './allblog.component.html',
  styleUrl: './allblog.component.scss'
})
export class AllblogComponent {

  blogService=inject(BolgService);

  blogs: any[] = [];
  filteredBlogs: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
      this.filteredBlogs = this.blogs;
    });
  }

  filterByYear(year: number): void {
    this.filteredBlogs = this.blogs.filter(blog => new Date(blog.publishedDate).getFullYear() === year);
  }

  viewBlog(id: string): void {
    this.router.navigate(['blog', id]);
  }

}
