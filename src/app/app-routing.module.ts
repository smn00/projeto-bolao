import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoListaComponent } from './components/evento-lista/evento-lista.component';
import { EventoComponent } from './components/evento/evento.component';
import { LoginComponent } from './components/login/login.component';
import { PalpiteListaComponent } from './components/palpite-lista/palpite-lista.component';
import { PalpiteComponent } from './components/palpite/palpite.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SelecaoListaComponent } from './components/selecao-lista/selecao-lista.component';
import { SelecaoComponent } from './components/selecao/selecao.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { Selecao } from './modelos/selecao.model';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"selecaolist", component:SelecaoListaComponent},
  {path:"selecao",component:SelecaoComponent},
  {path:"evento",component:EventoComponent},
  {path:"eventolist",component:EventoListaComponent}, 
  {path:"palpite",component:PalpiteComponent},
  {path:"palpitelist",component:PalpiteListaComponent},
  {path:"ranking",component:RankingComponent},
  {path:"usuario",component:UsuarioComponent},
  {path:"usuariolist",component:UsuarioListaComponent}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
