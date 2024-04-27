//CRIANDO TABUADA QUE APRESENTA AS 3 SEGUINTES
let tabuada = Number(prompt("Escolha um numero da tabuada:"))
let tabuada2 = tabuada + 1
let tabuada3 = tabuada2 + 1

for(let contador1 = 0; contador1 <= 10; contador1++) {
    console.log(tabuada + " x " + contador1 + " = " + tabuada*contador1)
} 

for(let contador2 = 0; contador2 <= 10; contador2++) {
   
    console.log(tabuada2 + " x " + contador2 + " = " + tabuada2*contador2)
}
for(let contador3 = 0; contador3 <= 10; contador3++) {

    console.log(tabuada3 + " x " + contador3 + " = " + tabuada3*contador3)
}

//SEGUNDA FORMA SIMPLIFICADO

// let numero = parseInt(prompt("Digite um numero inteiro e positivo"))

// for(let i = numero; i <= numero + 2; i++) {
//     console.log("tabuada do número: " + i)
//     for(let j = 0; j <= 10; j++) {
//         console.log(i + " X " + j + " = " + (i * j))
//     }
// }