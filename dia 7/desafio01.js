                        //SCHOOL (WHILE)   

//CRIANDO VARIÁVEIS
let mediaGeral = 0
let qtdHomens = 0
let qtdMulhersAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

//nota, sexo

while (contador <= 10) { 
    nota = Number(prompt("Digite a nota do " + contador + "* aluno"))
    sexo = prompt("Digite o sexo do aluno (f/m)")
    console.log(nota)
    console.log(sexo)
    if (sexo == "m") {
        if(nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        qtdHomens++
    }
    if (sexo == "f" && nota > 7) {
        qtdMulhersAcimaDe7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log("A media dos alunos foi: " + mediaGeral)
console.log("A quantidade de homens cadrastrado foi: " + qtdHomens)
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi: " + qtdMulhersAcimaDe7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)