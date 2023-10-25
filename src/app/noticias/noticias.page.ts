// Regil Isaac Batista 2021-2251
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get('https://blog.ted.com/wp-json/wp/v2/posts?per_page=10')
    .subscribe((data: any) => {
      this.posts = data;
    });
  }

}
