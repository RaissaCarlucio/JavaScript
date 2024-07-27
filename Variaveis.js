/*
Tipos de variaveis:

Boolean
Null
undefined
number
String
Objeto

O JavaScript e uma linguagem dinamicamente tipada
Os tipos de dados sao convertidos automaticamente conforme a necessidade durante a execucao do script

*/
var n = 20;
console.log(typeof(n)); // Fala que tipo e a variavel n (number)

var n2 = null;
console.log(typeof(n2)); // object

var n3 = new Array();
console.log(typeof(n3)); // object

var n4 = '';
console.log(typeof(n4)); // string

var nome = "Guilherme";
if(typeof(nome)=="string") // Se a variavel nome for String, converter a string para letras maiusculas
{
    console.log(nome.toLocaleUpperCase()); // (GUILHERME)
}else{
    console.log("Voce precisa usar uma string!")
}




