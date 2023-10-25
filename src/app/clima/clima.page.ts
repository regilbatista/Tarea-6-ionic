// Regil Isaac Batista 2021-2251
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  city: string = 'Santo Domingo';
  country: string = 'Republica Dominicana';
  weatherData: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCurrentWeather(); // Debes llamarlo usando "this" y con paréntesis
  }

  getCurrentWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=18.5001&lon=-69.9886&appid=dbd892f8d29d4cfcde11984a04626c0f`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherData = data;
    });
  }
}

