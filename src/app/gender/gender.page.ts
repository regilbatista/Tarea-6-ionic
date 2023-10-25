// Regil Isaac Batista 2021-2251
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {
  name: string = '';
  result: string = '';
  colorClass: string = 'default-color';
  
  constructor(private http: HttpClient) {}

  sendRequest() {
    const apiUrl = 'https://api.genderize.io/?name=' + this.name;

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.result = data.gender;
        if (this.result === 'male') {
          this.colorClass = 'blue-card';  
        } else {
          this.colorClass = 'pink-card'; 
        }
      },
      (error) => {
        console.error('Error al enviar la solicitud a la API', error);
      }
    );
  }

  ngOnInit() {}
}
