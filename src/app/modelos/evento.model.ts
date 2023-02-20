export class Evento {
    selecao1:string=""
    selecao2:string=""
    horarioinicio:string=""
    horarioencerramento:string=""
    placar:Array<number>=[]// Array 0 Seleção 1 - Array 1 Seleção 2 
    aberturaflag:boolean=true // Evento Aberto ou Fechado para apostas 
    
    constructor(
        sel1:string,
        sel2:string,
        inicio:string,
        fim:string,

    ){
        this.selecao1=sel1
        this.selecao2=sel2
        this.horarioinicio=inicio
        this.horarioencerramento=fim

    }
}

