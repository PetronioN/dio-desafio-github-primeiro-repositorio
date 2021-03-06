function myFunc(array, number) {
    try {
        if(!array && !number) throw new ReferenceError('Envie os parâmetros!');

        if(typeof array !== 'object') throw new TypeError('O array precisa ser do tipo Object.');

        if(typeof number !== 'number') throw new TypeError('O número precisa ser do tipo Number.');

        if(array.length !== number) throw new RangeError('Tamanho inválido!');

        return array;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        }else if(e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }if(e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}

console.log(myFunc([1, 2, 3, 4, 5], 5));