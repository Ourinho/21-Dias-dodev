//criando dois arrays para nomes e senhas
let nomes = []
let senhas = []
let contador = 0

let continuar = true

while(continuar) {
    //Solicitando qual operacao o usuario deseja e organizando a execução do codigo com um switchcase dentro de um while
    let operacao = Number(prompt("Qual operação deseja fazer? \n1) CADASTRAR \n2) LOGIN \n3) EXCLUIR \n4) ENCERRAR"))

    switch (operacao) {
        case 1:
            //Criando um cadastro de usuario
            nomes[contador] = prompt("Digite seu nome: ")
            console.log(nomes)
            senhas[contador] = prompt("Digite sua senha: ")
            console.log(senhas)
            contador++
            break;
        case 2:
            let nome = prompt("Digite seu nome: ")
            let senha = prompt("Digite sua senha: ")
            let loginInvalido

            for(let i = 0; i < nomes.length; i++) {
               if(nome == nomes[i] && senha == senhas[i]) { 
                loginInvalido = true
               }
            }
            if (loginInvalido) {
                alert(`Bem Vindo ${nomes}, logado com sucesso!`)
            } else {
                alert(`Login ou senha incorretos!`)
            }

            break;
        case 3:
            //Criando Excluir
            let nomeExcluir = prompt("Qual nome deseja excluir?")
            let nomesAux = []
            let senhaAux = []
            let contadorAux = 0

            for(let i = 0; i < contador; i++) {
                if(nomeExcluir == nomes[i]) {
                    alert("Cadastro exluido com sucesso")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhaAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }
            nomes = nomesAux
            senhas = senhaAux
            contador--
  
            break;

        case 4:
            continuar = false
            break;

        default:
            alert("Opção invalida, ecolha outra!")
            break;
    }

}