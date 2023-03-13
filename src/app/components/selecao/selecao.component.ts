import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent {

  nomeSelecao!: string;

  constructor(private router: Router, private http: HttpClient) {}


  salvar() {
    this.http.post('/salvar', { nome: this.nomeSelecao }).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }  

}
