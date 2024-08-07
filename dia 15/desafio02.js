// Declarando arrays que vamos ultilizar
let arrayA = [13,20,10,22,24,20,27,17,19,14,]
let arrayB = [24,22,23,11,15,17,29,14,16,21,]

// Declarando a função com os parâmetros pedidos
function AcharNumerosEmComum(arrayUm, arrayDois){
    let resultado = [] //Declarando array de números em comum
    let contadorResultado = 0 //contador desse array

    // O Primeiro FOR percorre o arrayUm
    for(let i = 0; i < arrayUm.length; i++){
        // O segundo FOR percorre o arrayDois, para cada número de arrayUm ele-
        // compara com todos os números de arrayDois
        for(let j = 0; j < arrayDois.length; j++){
            // Se a comparação for bem sucedida ele adiciona esse número no array de-
            // números em comum e atribui o valor máximo ao contador j assim encerrando
            // a verificação para esse número e evitando números duplicados
            if(arrayUm[i] == arrayDois[j]){
                resultado[contadorResultado++] = arrayUm[i]
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(AcharNumerosEmComum(arrayA, arrayB))