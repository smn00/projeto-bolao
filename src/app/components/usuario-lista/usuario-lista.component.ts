import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {
  usuarios: any;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/usuarios').subscribe(data => {
      this.usuarios = data;
    });
  }
}
