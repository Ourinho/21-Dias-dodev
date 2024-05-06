    //Declaração de variaveis.

let nome = ""
let idade = 0
let altura = 0
let peso = 0

    //Solicitando informação ao usuario e atribuindo os valores as variaveis

nome = prompt("Digite seu nome: ")
idade = Number(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = Number(prompt("Digite seu peso: "))

    //Calculando o ano que a pessoa nasceu e o IMC
let soma = 2023 - idade
 
let imc =0
imc = peso / (altura * altura)

    //Exibindo as informaçpes no console

console.log("Olá " + nome +", voçê tem " + idade + " anos, nasceu em " + soma +", tem " + altura + " de altura, pesa " + peso+"kg seu IMC é " + imc +"Kg/m2" )
