//CRIANDO VARIÁVEIS
let posto = prompt("Qual serviço deseja fazer:" + "\n1 = Gasolina \n2 = àlcool \n3 = Calibrar")

//CRIANDO SWITCHCASE
switch (posto) {
    case "1":
        valor = Number(prompt("Quanto quer de gasolina?"))
        quantidade = valor / 5
        console.log("Você abasteceu " + quantidade.toFixed(2) + "L de gasolina")
        break;
    case "2":
        valor = Number(prompt("Quanto quer de àlcool?"))
        quantidade = valor / 3 
        console.log("Você abasteceu " + quantidade.toFixed(2) + "L de àlcool")
        break;
    default :
        console.log("Pneus calibrados com sucesso")
        break;
}