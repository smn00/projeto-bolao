import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SelecaoListaComponent } from './components/selecao-lista/selecao-lista.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"selecao/listar", component:SelecaoListaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
