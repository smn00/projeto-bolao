import { Evento } from "./evento.model"
import { Usuario } from "./usuario.model"

export class Palpite {
   palpite1:number=0
   palpite2:number=0// posição1 seleção 1, posição2 seleção 2.
   usuario_palpite!: Usuario 
   evento_palpite!: Evento

   constructor(palpite1:number,palpite2=number){
    this.palpite1=palpite1
    this.palpite2=palpite2
   }
}
