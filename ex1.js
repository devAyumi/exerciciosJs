const prompt = require('prompt-sync')();

class Carros{
    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    verificarKmRodado(){
        let kmRodado = prompt("Insira a quantidade de km rodados: ");
        return kmRodado;
    }

    calcularValor(){
        const kmRodado = this.verificarKmRodado();
        let gastoTotal = this.gastoMedioPorKm * kmRodado;
        console.log("Gasto total de " + gastoTotal);
    }
}

const kwid = new Carros("renault", "preto", 20);
kwid.calcularValor();