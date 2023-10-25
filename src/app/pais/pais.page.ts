import { Component, OnInit } from '@angular/core';
import axios from 'axios'; // Importar axios

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {
  countryName: string = '';
  universities: any[] = [];

  constructor() {}

  buscar() {
    if (this.countryName) {
      const apiUrl = `https://api.adamix.net/itla/universidades/?pais=${this.countryName}`;
      axios
        .get(apiUrl)
        .then((response) => {
          // Manejar la respuesta exitosa aquí
          this.universities = response.data;
        })
        .catch((error) => {
          console.error('Error en la solicitud HTTP:', error);
        });
    }
  }

  ngOnInit() {}
}
