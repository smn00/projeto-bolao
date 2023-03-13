import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SelecaoComponent } from './components/selecao/selecao.component';
import { PalpiteComponent } from './components/palpite/palpite.component';
import { EventoComponent } from './components/evento/evento.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { EventoListaComponent } from './components/evento-lista/evento-lista.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { SelecaoListaComponent } from './components/selecao-lista/selecao-lista.component';
import { PalpiteListaComponent } from './components/palpite-lista/palpite-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelecaoComponent,
    PalpiteComponent,
    EventoComponent,
    RankingComponent,
    EventoListaComponent,
    UsuarioComponent,
    UsuarioListaComponent,
    SelecaoListaComponent,
    PalpiteListaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
