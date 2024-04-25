//PEDINDO INFORMAÇÕES AO USUÁRIO
let fome = prompt("Você esta com fome? sim/nao")
let dinheiro = prompt("Você tem dinheiro? sim/nao")
let restauranteAberto = prompt("Restaurante aberto? sim/nao")

//EXIBINDO MENSAGEM NO CONSOLE
if(fome === "nao" || dinheiro === "nao"){
    console.log('Hoje a janta será em casa')
}else if(dinheiro === "sim" && restauranteAberto === "sim"){
    console.log("hoje o jantar será no seu restaurante preferido!")
}else{
    console.log("Peça um delivery")
}
