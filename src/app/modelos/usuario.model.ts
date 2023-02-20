export class Usuario {
    username:string=""
    password:string=""
    nome:string=""
    email:string=""
    pontuacao:number=0
    constructor(
        usr:string,pass:string,nome:string,email:string
    ){
        this.username=usr
        this.password=pass
        this.nome=nome
        this.email=email
    }

}
