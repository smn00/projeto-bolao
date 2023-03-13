import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  usuario = '';
  senha = '';

  constructor(private router: Router, private http: HttpClient) {}

  
  onSubmit() {
    const data = {
      email: this.email,
      usuario: this.usuario,
      senha: this.senha
    };

    this.http.post('/login', data).subscribe((response) => {
      // Handle the response from the backend
      console.log(response);
    });
  }
}




