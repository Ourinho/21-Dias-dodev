class Aluno {
    nome
    idade
    areaAtuacao
    constructor(nome, idade){
        this.nome
        this.idade
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos e minha área de atuação é ${this.areaAtuacao}.`)
    }
}

console.log("========== Cadastro de alunos ==========")
let alunos = []
let continuar = true
let indexDeAluno = 0

while(continuar){
    let nome = prompt("Insira o nome do aluno: ")
    let idade = parseInt(prompt("Insira a idade do aluno: "))
    let aluno = new Aluno(nome, idade)

    let areaAtuacao = prompt("Insira a área de atuação do aluno: ")
    aluno.areaAtuacao = areaAtuacao

    aluno[indexDeAluno] = aluno
    let desejaContinuar = prompt("Deseja inserir mais aluno? (s / n)")

    if(desejaContinuar != "s") {
        continuar = false
    } else{
        indexDeAluno++
    }
}