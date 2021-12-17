# Objetivos

1. Conhecer a implementação do método map

## O que é

Quando um conjunto passa por uma operação e se
torna outro conjunto.

- Cria um novo array
- Não modifica o array original
- Realiza as operações em ordem

## Sintaxe

array.map(callback, thisArg)
callback(item, index, array)

<strong>Callback</strong>: função a ser executada em cada elemento.
<strong>thisArg</strong>: valor de 'this' dentro da função de
callback.

O thisArg é opcional.

## Map vs forEach

// Usando map

const array = [1, 2, 3, 4, 5]

array.map((item) => item * 2); // retorno: [2, 4, 6, 8, 10];

// Usando forEach

const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); // retorno: undefined

- Valor de retorno
- Considere se o array auxiliar será necessário

