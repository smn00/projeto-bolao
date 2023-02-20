import { Evento } from "./evento.model"
import { Usuario } from "./usuario.model"

export class Palpite {
   palpite: Array<number>=[] // posição zero seleção 1, posição 1 seleção 2.
   usuario_palpite!: Usuario 
   evento_palpite!: Evento

   constructor(palpite:Array<number>){
    this.palpite=palpite
   }
}
