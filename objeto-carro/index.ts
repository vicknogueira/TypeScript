class Carro{
    //atributos e tipo de atributos
    marcaCarro:string;
    anoCarro: number;
    velocidadeAtualCarro: number;
    velocidadeMaximaCarro: number;

    // método construtor
    constructor (_marcaCarro:string = '', _anoCarro: number = 2020,_velocidadeAtualCarro: number = 0, _velocidadeMaximaCarro:number = 0){
        this.marcaCarro = _marcaCarro;
        this.anoCarro = _anoCarro;
        this.velocidadeAtualCarro = _velocidadeAtualCarro;
        this.velocidadeMaximaCarro = _velocidadeMaximaCarro;
    }

    //outro método 
    acelerar(){
        if(this.velocidadeAtualCarro < this.velocidadeMaximaCarro){
            for(var i = 0; this.velocidadeAtualCarro < this.velocidadeMaximaCarro; i++){
                this.velocidadeAtualCarro ++
                console.log(`Velocidade máxima: ${this.velocidadeMaximaCarro}\nAcelerando: ${this.velocidadeAtualCarro}`)
            }
        }else{
            console.log(`Você esta na velocidade máxima permitida !`)
        }
    }
    desacelerar(){
        if(this.velocidadeAtualCarro > 0){
            for(var i = 0; this.velocidadeAtualCarro > 1;i++){
                this.velocidadeAtualCarro--
                console.log(`Velocidade máxima: ${this.velocidadeMaximaCarro}\nDesacelerando: ${this.velocidadeAtualCarro}`)
            }
        }else{
            console.log(`Você ja esta parado !`)
        }
    }
}
var resultado = new Carro('Honda', 2020, 0, 10)
console.log(resultado.acelerar())
console.log(resultado.acelerar())
console.log(resultado.desacelerar())