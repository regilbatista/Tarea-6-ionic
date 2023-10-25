import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'briefcase' },
    { title: 'Genero', url: 'gender', icon: 'male-female' },
    { title: 'Edad', url: 'edad', icon: 'hourglass' },
    { title: 'Pais', url: 'pais', icon: 'planet' },
    { title: 'clima', url: 'clima', icon: 'rainy' },
    { title: 'noticias', url: 'noticias', icon: 'newspaper' },
    { title: 'Contratame', url: 'sobre', icon: 'at' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
