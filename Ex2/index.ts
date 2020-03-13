// testando as funcionalidades de var e let

// let tipo: any
// tipo = 'any'
// console.log(tipo)
// tipo = 2
// console.log(tipo)
// tipo = true
// console.log(tipo)
// _________________________________________________
// var n1 = 2
// var n2 =0

// if(n1 > 0){
//     n2 = 100
// }
// console.log(n1)
// console.log(n2)

// n1 = 1
// var n1: number // com o var é uma variável global ele pode ser executado mesmo sendo declarado depois
// console.log(n1)

// n2 = 1
// let n2: number // let não é global é preciso declarar antes

//______________________________________________
function testeVar(input: boolean){
    var a = 100
    var b; // indefinido

    if(input){
        b = a + 1 // numerico 
    }
    console.log(b)
    return b
}
