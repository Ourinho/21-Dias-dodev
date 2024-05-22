/// FUNÇÃO

function somar(num1, num2) {
    console.log(`Estou dentro da função somar`)
    console.log(num1)
    console.log(num2)
}

somar(1, 2);

// COM RETURN

function somar(num1, num2) {
    return num1 + num2;
}

let resultadoSoma = somar(1, 2)