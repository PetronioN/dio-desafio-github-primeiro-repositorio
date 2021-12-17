// Primeiro exercício

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    })
}

const arr = [1, 2];

console.log(somaNumeros(arr));

// Segundo exercício

const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;


function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(previ, currentt, index) {
        console.log('rodada', index + 1);
        console.log( { previ });
        console.log( { currentt });
        return previ - currentt.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));