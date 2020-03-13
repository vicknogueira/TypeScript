var Cumprimento = /** @class */ (function () {
    //método construtor
    function Cumprimento(_nome, _idade) {
        if (_nome === void 0) { _nome = ''; }
        if (_idade === void 0) { _idade = 18; }
        this.nome = _nome;
        this.idade = _idade;
    }
    //outro método
    Cumprimento.prototype.mostrarNomeIdade = function (idade, nome) {
        return "A " + nome + " tem " + idade + " anos";
    };
    return Cumprimento;
}());
// fim da definição da classe ---------------------
// Invocando a função
// instanciar é criar uma cópia do objeto, logo ele é um objeto
//Invocando a função e o resultado vou armazenar numa variável de mmória chamada resposta
var pessoa1 = new Cumprimento(); // serve para criar o onjeto - inicializamos com vazio
console.log(pessoa1.mostrarNomeIdade(18, 'Vick')); //utilizando um método do objeto resposta
