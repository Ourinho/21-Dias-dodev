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
    Nome
    Tipo
    Distacia
    Participantes
    Vencedor

    constructor(nome, tipo, distacia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distacia = distacia
        this.Participantes = []
        this.Vencedor = ""
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalculeTempoMedio(this.Distacia)
        let vencedor = this.Participantes[0]

        for(let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].CalculeTempoMedio(this.Distacia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }
        
        return this.Vencedor = vencedor
    }

    ExibirVencedor(){
        alert("O vencedor é ; " + this.Vencedor.nome)
    
    }
}

let corrida = new Corrida("paris", "formula 1", 60000)

corrida.Participantes[0] = new Carro("fusca", 120, 160, 3)
corrida.Participantes[1] = new Carro("Fiat",210, 200, 6)
corrida.Participantes[2] = new Carro("palio", 300, 220, 8)

corrida.DefinirVencedor()
corrida.ExibirVencedor()

