let idade = Number(prompt("Insira sua idade:"))

switch(idade) {
    case 10:
        console.log('voce tem 10 anos')
        console.log("segunda linha")
        break;
    case 15:
        console.log("voce tem 15 anos")
        console.log("segunda linha")
        break;
    default:
        console.log("default")
        break;
}