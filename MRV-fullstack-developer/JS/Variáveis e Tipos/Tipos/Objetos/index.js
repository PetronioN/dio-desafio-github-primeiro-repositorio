let obj = {};

obj.name = "julia";

obj.age = 20;

Object.values(obj); //vê os valores dos objetos

Object.keys(obj); //retorna as chaves

let person = {
    name: 'Julia',
    age: 20,
    adress: "Rua 2"
}

console.log(person);

person.name(); //retorno o valor de name

person["name"]; //retorna o valor de name

person["numberOfSiblings"] = 3; //cria uma chave e seu valor