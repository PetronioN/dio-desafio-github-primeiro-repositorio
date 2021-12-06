numberOne = 1; //atribuição

console.log(numberOne + 2);

var numberOne;
//se eu usar let numberOne, ele me retorna um erro.

var firstName = 'João';
var lastName = 'Souza';

if(firstName === 'João') {
    var firstName = 'Pedro';
    let lastName = 'Silva';
    // lastName = 'Pereira'; reatribuição

    console.log(firstName, lastName); //espero que me retorne Pedro Silva
}

console.log(firstName, lastName); //eu espero que me retorne Pedro Souza