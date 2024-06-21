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

class Corrida {
    nome
    tipo
    distacia
    participantes
    vencedor
    constructor(nome, tipo, distacia){
        this.nome = nome
        this.tipo = tipo
        this.distacia = distacia
        this.participantes = []
        this.vencedor = ""
    }

    DefinirVencedor(){
        let menorTempo = this.participantes[0].CalculeTempoMedio(this.distacia)
        let vencedor = this.participantes[0]

        for(let index = 1; index < this.participantes.length; index++){
            let tempo = this.participantes[index].CalculeTempoMedio(this.distacia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.participantes[index]
            }
        }

        return this.vencedor = vencedor
    }

    ExibirVencedor(){
        alert("O vencedor é; " + this.vencedor.nome)
    }
}

let corrida = new Corrida("paris", "formula 1", 60000)

corrida.participantes[0] = new Carro("fusca", 120, 160, 3)
corrida.participantes[1] = new Carro("Fiat",210, 200, 6)
corrida.participantes[2] = new Carro("palio", 300, 220, 8)

corrida.DefinirVencedor()
corrida.ExibirVencedor()

