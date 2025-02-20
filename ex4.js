const nome = "Fabiane Ayumi Hasegawa";

for (let i = 0; i < nome.length; i++){
    const letras = nome[i];
    console.log(letras);
}

const notas = [];

notas.push(7);
notas.push(9);
notas.push(6);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);