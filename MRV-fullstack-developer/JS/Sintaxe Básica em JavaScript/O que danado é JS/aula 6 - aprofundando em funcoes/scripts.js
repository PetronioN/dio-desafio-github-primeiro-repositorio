//tipos de função

//declarativas
function funcao() {
    console.log("Tudo certo jovem.");
}

funcao();

//expressão de função
//com nomeação
var funcao = function funcao(){
    console.log("Sou uma mensagem de função de expressão.");
}

funcao();

var funcao2 = function(){
    console.log("Sou uma mensagem de função de expressão.");
}

funcao2();

//arrow function
var funcao3 = () => {
    console.log("Sou uma arrow function");
}