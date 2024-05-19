
//CRIANDO VARIÀVEIS.
let nome
let idade

//PEDINDO INFORMAÇÕES AO USUÁRIO
nome = prompt("Insira seu nome:")
idade = Number(prompt("Insira sua idade"))
let cnh = prompt("Você possui CNH? sim/nao")
let carro = prompt("Você tem carro? sim/nao")

//EXIBINDO MENSAGEM NO CONSOLE
if (idade <= 17 || cnh === 'nao') {
    console.log(nome + ", você não pode dirigir.")
}else if (cnh == 'sim' && carro === 'nao') {
    console.log(nome + ", você pode dirigir mais nao tem carro.")
}else {
    console.log(nome + ", você serà o motorista")
}

           //Outro modo de fazer
/*8
//CRIANDO VARIÀVEIS
let nome
let idade
let temCarta = false
let temCarro = false

//PEDINDO INFORMAÇÕES AO USUÁRIO
nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if (opcaoCarta == 's') {
    temCarro = false
}

//EXIBINDO MENSAGEM NO CONSOLE
if (idade < 18 || !temCarro) {
    console.log(nome + ", você não pode digirir")
} else if (idade >= 18 && temCarta && !temCarro) {
    console.log(nome + ", você pode dirigir mas não tem carro")
} else {
    console.log(nome + ", você será o motorista!")
}*/