class Carro{
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }
    
    CalculeTempoMedio(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
        return resultado;
    }
}
console.log(`Me u carro é uma ${this.nome}, ele tem ${this.potencia} de cavalos, a velocidade maxima dele é de ${this.velocidadeMaxima} ele pega de 0 a 100km em ${this.aceleracao}.`) 

const informacaoDoCarro = new Carro('McLaren', 700, 360, 3);

informacaoDoCarro.CalculeTempoMedio();