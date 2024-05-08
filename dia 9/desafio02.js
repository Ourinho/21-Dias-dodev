                //CRIANDO UM ALGORITMO PARA PREVER O SALARIO

//CRIANDO VARIAVEIS
let continuar = true

while(continuar) {
let salarioAtual
let confirmacao = "n"

//CRIANDO VARIÁVEIS/LOOP
while (confirmacao != "s") {
    
let nome = prompt("Insira seu nome: ")
let idade = Number(prompt("Insira sua idade: "))
salarioAtual = Number(prompt("Insira seu salario Atual: "))

console.log(`Olá ${nome}, sua idade é ${idade}, seu salario atual é ${salarioAtual}. `)

confirmacao = prompt("Seus dados estão corretos? (s/n) ")
}

//FAZENDO A PREVISÃO DO SALÁRIO
let aumento = 0.015
console.log("Previsao de aumento dos proximos 10 anos.")

for(let ano = 1; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumento
    aumento *= 2
    let anoAtual = 2024 + ano
    console.log(` ${ano} ${anoAtual.toFixed(2)}= R$${salarioAtual.toFixed(2)}.`)
}

continuar = prompt("Deseja inserir os dados novamente? (s/n) ")

if (continuar == "n") {
    continuar = false
}
}
