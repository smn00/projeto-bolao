import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecao-lista',
  templateUrl: './selecao-lista.component.html',
  styleUrls: ['./selecao-lista.component.css']
})
export class SelecaoListaComponent implements OnInit{
   selecoes!: any[];

   constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/obter_selecoes').subscribe(
      (selecoes: any[]) => {
        this.selecoes = selecoes;
      },
      (erro) => {
        console.log('Erro ao obter selecoes: ', erro);
      }
    );
  }

}

