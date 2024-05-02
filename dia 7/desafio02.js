                            //CAIXA ELETRONICO (DO WHILE)
                            
let saldo = 1200;
let continuar = false;
let totalTransacoes = 0;
let somarValoresInseridos = 0;
let maiorValorInserido = 0;
let valor = 0;

do {
    let nome = prompt("Digite seu nome: ")
    console.log(nome)
    let cpf = parseInt(prompt("Digite seu CPF: "))
    console.log(cpf)
    valor = parseInt(prompt("Digite o valor da transação: "))
    console.log(valor)
    let opcoes = prompt("Saque ( S ) ou Deposito ( D )")
    console.log(opcoes)

    if (valor <= 0) {
        consolo.log("Valor de transação invalido. A Transação nao foi realizada.");
        
    } else if (opcoes == "S" && valor > saldo) {
        console.log("Saldo insuficiente. A transação não foi realizada.");
    } else if (opcoes == "S") {
        console.log("Olà, " + nome + " do cpf " + cpf + ", seu saldo atual é " + saldo + ".");
        saldo -= valor;
        totalTransacoes++;
        somarValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log("Transação realizada com sucesso. Seu saldo atual é " + saldo)   
    } else {
        console.log("Olà, " + nome + " do cpf " + cpf + ", seu saldo atual é " + saldo + ".")
        saldo += valor;
        totalTransacoes++;
        somarValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log("Transação realizada com sucesso. Seu saldo atual é " + saldo) 
    }
     
    const escolha = prompt("Deseja continuar a operação? continuar ( 1 )  Parar ( 2 )")

    if (escolha == '1' ) {
        continuar = true 
    } else if (escolha == '2' ) {
        continuar = false
    } else  {
        console.log("Opção invalida. Programa encerrado. ")
       continuar = false
    }
    
    
} while (continuar)
    
    console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<")
    console.log("Valor total: R$:" + valor)
    console.log("total de transição " + totalTransacoes)
    console.log("Soma do valores das transição " + somarValoresInseridos)
    console.log("Maior valor inserido " + maiorValorInserido)
