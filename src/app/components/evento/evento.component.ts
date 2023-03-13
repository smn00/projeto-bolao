import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  
  evento = {
    id: 0,
    selecao1: "",
    selecao2: "",
    horarioinicio: "",
    horariofim: "",
    placar1: 0,
    placar2: 0,
    aberturaflag: false
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  adicionarEvento(): void {
    this.http.post<any>('http://localhost:8000/api/eventos', this.evento)
      .subscribe(data => {
        console.log(data);
      });
  }  
}

