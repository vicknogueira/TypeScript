class Cumprimento{
    //atributos 
    // nome do atributo:tipo
    nome:string
    idade:number

    //método construtor
    constructor (_nome:string = '', _idade:number = 18){
        this.nome = _nome;
        this.idade = _idade;
    }

    //outro método
    mostrarNomeIdade(idade: number, nome: string){
        return `A ${nome} tem ${idade} anos`
    }
}
// fim da definição da classe ---------------------

// Invocando a função
// instanciar é criar uma cópia do objeto, logo ele é um objeto


//Invocando a função e o resultado vou armazenar numa variável de mmória chamada resposta
let pessoa1 = new Cumprimento()// serve para criar o onjeto - inicializamos com vazio
console.log(pessoa1.mostrarNomeIdade(18, 'Vick')) //utilizando um método do objeto resposta
