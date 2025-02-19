const notas = [];

notas.push(5);
notas.push(6);
notas.push(7);
notas.push(3);
notas.push(9);

for (let i = 0; i < notas.length; i++){
	let soma = notas[i]++;
    console.log(soma);
}