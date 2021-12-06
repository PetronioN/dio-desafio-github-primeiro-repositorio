let nome = 'João';

let sobrenome = 'Pedro';

let concatenado = nome.concat(sobrenome) //Junta as duas strings

concatenado.length(); //retorna o tamanho da string

let exemplo = new String("blallll");
typeof(exemplo); //é um objeto

let vazio = ""; //você pode declarar uma string vazia

nome[1]; //retorna a letra o

concatenado = nome + " " + sobrenome; //coloca o nome e sobrenome com espaço

concatenado = nome + "\n" + sobrenome; //quebra uma linha

concatenado = `${nome} ${sobrenome}`;

concatenado = `${nome}
${sobrenome}`;

concatenado = "\""; //retorna o aspas

let frase = "Olá, tudo bem?";

frase.split(""); //separa tudo

frase.split(" "); //separo tudo com espaço. Não modifica a frase.

frase.includes("tudo"); //procura se tem a palavra passada

frase.startsWith("O"); //verifica se a frase começa com O

frase.endsWith("O"); //verifica se a frase termina com O

frase.replace(",", "!"); //substitui a vírgula por um ponto de exclamação

let stringModificada = frase.replace(",", "!");