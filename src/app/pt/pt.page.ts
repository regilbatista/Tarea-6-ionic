import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pt',
  templateUrl: './pt.page.html',
  styleUrls: ['./pt.page.scss'],
})
export class PtPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
