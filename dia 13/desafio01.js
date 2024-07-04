class Computador {
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaRam = memoriaRam;
        this.ssd = ssd;
    }
    
    ExibirInformacoes(){
        console.log(`O tipo do meu setup é ${this.tipo}, processador é ${this.processador}, video é um ${this.video}, tem ${this.armazenamento} de armazenamento, tem ${this.memoriaRam} de memoriaRam e sdd ${this.ssd}`);
    }
}

const meuComputador = new Computador('Desktop', 'Ryzen 5', 'dedicado', 1000, 18, true);

meuComputador.ExibirInformacoes();