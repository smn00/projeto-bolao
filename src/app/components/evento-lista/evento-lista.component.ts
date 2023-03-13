import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.css']
})
export class EventoListaComponent {
  eventos!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('/obter_eventos').subscribe(
      (eventos) => {
        this.eventos = eventos;
      },
      (erro) => {
        console.log('Erro ao obter eventos: ', erro);
      }
    );
  }

}
