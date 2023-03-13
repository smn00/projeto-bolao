import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-palpite',
  templateUrl: './palpite.component.html',
  styleUrls: ['./palpite.component.css']
})
export class PalpiteComponent {
  selecao1!: string;
  selecao2!: string;

  constructor(private http: HttpClient) {
    // fazendo requisição para o backend e obtendo as seleções
    this.http.get<any>('http://localhost:5000/selecoes').subscribe(data => {
      this.selecao1 = data.selecao1;
      this.selecao2 = data.selecao2;
    });
  }

  onSubmit() {
    // envia o palpite para o backend
  }

}
