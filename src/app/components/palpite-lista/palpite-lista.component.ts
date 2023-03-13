import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-palpite-lista',
  templateUrl: './palpite-lista.component.html',
  styleUrls: ['./palpite-lista.component.css']
})
export class PalpiteListaComponent {
  palpiteList: any;

  constructor(private router: Router, private http: HttpClient) {}

  getPalpite(user_id: number): void {
    this.http.get(`/api/palpite/${user_id}`).subscribe(data => {
      this.palpiteList = data;
    });
  }

}
