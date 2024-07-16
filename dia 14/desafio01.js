// Função para perguntar nome e salário do colaborador
var nome
var salario

function perguntarColaborador() {
    nome = prompt("Insira seu nome: ");
    salario = parseFloat(prompt("Insira seu salario: "));
    calcularAumentoSalario(nome, salario);
}


// Função para calcular o aumento de salário
function calcularAumentoSalario(nome, salario) {
    var aumento = 0;

    if(salario <= 1500){
        aumento = 0.20; //20%
    } else if(salario <= 2000){
        aumento = 0.15 //15%
    } else if(salario <= 3000){
        aumento = 0.10 //10%
    } else { 
        aumento = 0.05 //5%
    }

    var novoSalario = salario + (salario * aumento);

    // Exibindo os resultados 
    console.log(`Meu nome é: ${nome}, salário é: ${salario}, meu aumento salarial é de: ${aumento * 100}%, meu salário reajustado é: ${novoSalario}.`)

    perguntarNovamente(); //Perguntando se deseja calcular novamente
}

//função para perguntar se o usuario deseja calcular novamente
function perguntarNovamente(){
    var resposta = prompt("dEseka calcular novamente? (s/n)");

    if (resposta == "s") {
        perguntarColaborador(); //reniciar o processo
    } else {
        console.log("Programa encerrado.")
    }
}

