var Carro = /** @class */ (function () {
    // método construtor
    function Carro(_marcaCarro, _anoCarro, _velocidadeAtualCarro, _velocidadeMaximaCarro) {
        if (_marcaCarro === void 0) { _marcaCarro = ''; }
        if (_anoCarro === void 0) { _anoCarro = 2020; }
        if (_velocidadeAtualCarro === void 0) { _velocidadeAtualCarro = 0; }
        if (_velocidadeMaximaCarro === void 0) { _velocidadeMaximaCarro = 0; }
        this.marcaCarro = _marcaCarro;
        this.anoCarro = _anoCarro;
        this.velocidadeAtualCarro = _velocidadeAtualCarro;
        this.velocidadeMaximaCarro = _velocidadeMaximaCarro;
    }
    //outro método 
    Carro.prototype.acelerar = function () {
        if (this.velocidadeAtualCarro < this.velocidadeMaximaCarro) {
            for (var i = 0; this.velocidadeAtualCarro < this.velocidadeMaximaCarro; i++) {
                this.velocidadeAtualCarro++;
                console.log("Velocidade m\u00E1xima: " + this.velocidadeMaximaCarro + "\nAcelerando: " + this.velocidadeAtualCarro);
            }
        }
        else {
            console.log("Voc\u00EA esta na velocidade m\u00E1xima permitida !");
        }
    };
    Carro.prototype.desacelerar = function () {
        if (this.velocidadeAtualCarro > 0) {
            for (var i = 0; this.velocidadeAtualCarro > 1; i++) {
                this.velocidadeAtualCarro--;
                console.log("Velocidade m\u00E1xima: " + this.velocidadeMaximaCarro + "\nDesacelerando: " + this.velocidadeAtualCarro);
            }
        }
        else {
            console.log("Voc\u00EA ja esta parado !");
        }
    };
    return Carro;
}());
var resultado = new Carro('Honda', 2020, 0, 10);
console.log(resultado.acelerar());
console.log(resultado.acelerar());
console.log(resultado.desacelerar());
