                //CALCULADORA

//CRIANDO VARIÁVEIS
let num1 = Number(prompt("Insira seu primeiro numero:"))
let num2 = Number(prompt("Insira seu segundo numero:"))
let opcao = Number(prompt("Qual operação que deseja realizar? " + ("\n1 = +; \n2 = -; \n3 = *; \n4 = /; ")))

//CRIANDO SWITCHCASE
switch (opcao) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    
    default:
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
}