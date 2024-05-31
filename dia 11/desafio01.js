//CRIANDO VARIAVEIS.
let alunos = []
let notas = []
let continuar = 's'
let contador = 0

//CRIANDO LOOP
while(continuar === 's' ){

    let nome = prompt("Insira seu nome: ")
    console.log(nome)
    let nota = Number(prompt("Insira sua nota: "))
    console.log(nota)

    alunos[contador] = nome
    notas[contador] = nota
    contador++
    
    let resposta = prompt("deseja continuar inseriando informação dos alunos? (s/n)")

    if (resposta == 'n')
        continuar = false     
}

//EXIBINDO INFORMAÇÕES
console.log('Notas dos alunos: ')
for (let i =0; i < alunos.length; i++) {
    console.log(`${alunos[i]} = ${notas[i]}`)
}

let somaNotas = 0
for (let i =0; i < notas.length; i++) {
    somaNotas += notas[i]
}
let media = somaNotas / alunos.length
console.log(`A soma das notas foi: ${somaNotas}`)
console.log(`A média geral da turma foi: ${media}`)
