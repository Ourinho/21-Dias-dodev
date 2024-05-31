//CRIANDO VARIAVEIS.
let alunos = []
let notas = []
let continuar = 's'
let contador = 0

//CRIANDO LOOP
while(continuar === 's' ){

    ArrayAlunos = prompt("Insira seu nome: ")
    console.log(nome)
    ArrayNotas = Number(prompt("Insira sua nota: "))
    console.log(nota)

    alunos[contador] = nome
    notas[contador] = nota
    contador++
    
    continuar = prompt("deseja continuar inseriando informação dos alunos? (s/n)")

    if (continuar === 'n'){
    
    }  
    
}