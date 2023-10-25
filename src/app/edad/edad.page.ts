// Regil Isaac Batista 2021-2251
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  userData: any[] = [];
  constructor(private http: HttpClient) { }
  name: string = '';

  getAge() {
    if (this.name == null) {
      this.resetResult();
      return;
    }
    this.resetResult();
    const apiUrl = `https://api.agify.io/?name=${this.name}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      if (data.age) {
        const user = {
          name: this.name,
          result: data,
          message: '',
          age: data.age,
          imageUrl: '',
        };
        this.determineAgeCategory(user);
        this.userData.push(user); 
      } else {
        this.resetResult();
      }
    });
  }

  determineAgeCategory(user: any) {
    const age = user.age;
    if (age < 18) {
      user.message = 'Eres joven';
      user.imageUrl = 'assets/images/joven.png';
    } else if (age >= 18 && age < 65) {
      user.message = 'Eres adulto';
      user.imageUrl = 'assets/images/adulto.jpg';
    } else {
      user.message = 'Eres anciano';
      user.imageUrl = 'assets/images/anciano.jpg';
    }
  }

  resetResult() {
    this.userData = []; 
  }

  ngOnInit() {
  }

}
