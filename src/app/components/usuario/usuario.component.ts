import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  email!: string;
  usuario!: string;
  senha!: string;

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    const data = {
      email: this.email,
      usuario: this.usuario,
      senha: this.senha
    };

    this.http.post('/api/registro', data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
