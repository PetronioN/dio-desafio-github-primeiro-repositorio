let array = [];

let array = new Array(); //não é muito comum

array.push(3); //adiciono um número no final

array.push(2);

array.pop(); //retira o elemento do final do array

array.push(2);

array.push(5);

array.shift(); //tira o primeiro elemento

array.unshift(1); //adiciona no inicio do array

for(let i; i < array.length; i++) {
    console.log(array[i]);
}

array.includes(3); //verifica se tem o elemento 3

array.every(item => item === 5); //se todos são iguais a 5

array.some(item => item === 5); //se algum item é igual a 5

array.reverse(); //reverte o array