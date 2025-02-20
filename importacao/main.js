
// importa as funções do outro arquivo
const {gets, print} = require('./funcoes-auxiliares');

let numerosSorteados = [];

for (let i = 0; i < 6; i++){
    let numeroInserido = gets();
    if (numeroInserido > 0 && numeroInserido <= 100){
        numerosSorteados[i] = numeroInserido;
    } else {
        console.log("Número inserido inválido.")
    }
}

let maiorNumero = numerosSorteados[0];

for (let i = 0; i < numerosSorteados.length; i++) {
    if (numerosSorteados[i] > maiorNumero){
        maiorNumero = numerosSorteados[i];
    }
}

print(numerosSorteados);
print(maiorNumero);