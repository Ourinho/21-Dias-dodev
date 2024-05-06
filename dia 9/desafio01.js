        // CONHECENDO SEU USUARIO
//criando variaveis
let nome = prompt(`Insira seu nome: `)
let idade = Number(prompt(`Insira sua idade: `))
let peso = Number(prompt(`Insira seu peso: `))
let altura = Number(prompt(`Insira sua altura: `))
let profissão = prompt(`Insira sua profissão: `)

 console.log(`Olá ${nome}, voce tem ${idade}, é ${profissão}, tem ${altura}M e pesa ${peso}kg.`)

if (idade >= 18) {
    console.log("Esta liberado para tomar uma geladas.")
} else {
    console.log("Sem gelada para você")
}

let idadeDias = idade * 365
let idadeSemanas = idade * 52
let idadeMeses = idade * 12

console.log(`Sua idade em dias é: ${idadeDias} `)
console.log(`Sua idade em semanas é: ${idadeSemanas} `)
console.log(`Sua idade em meses é: ${idadeMeses} `)

let imc = peso / (altura * altura)

console.log(imc.toFixed(1))

if (imc < 18.5) {
    console.log(`Você esta magro`)

} else if (imc > 18.5 && imc < 24.9) {
    console.log(`Você esta normal`)

} else if (imc > 24.9 && imc < 30) {
    console.log("Você esta sobrepeso")

} else {
    console.log("Você tem Obesidade")
}

let anoAtual = 2023
let anoNasc = anoAtual - idade

console.log(`Você nasceu no ano de ${anoNasc}.`)

let anoVivido = anoNasc
let idadeAtual = 0

for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(`${anoVivido} - ${idadeAtual} anos de idade`)
    idadeAtual++
}