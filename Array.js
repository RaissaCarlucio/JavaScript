/* 
Array = Lista de objetos
 Objetos que contem multiplos valores armazenados em uma lista.
*/
var valores = [8,1,7,2,9] // Meu Array tem 5 posicoes.
console.log(valores[0], valores[1]) // 8 1


var soma = 0;
for (var pos = 0; pos < valores.length; pos++){
    console.log("Posicao " + pos + ", valor: " + valores[pos]);
    soma = soma + valores[pos] // soma += valores[pos]
}/*
Posicao 0, valor: 8
Posicao 1, valor: 1
Posicao 2, valor: 7
Posicao 3, valor: 2
Posicao 4, valor: 9
*/

var carros = [];
carros [0] = "Volvo";
carros [1] = "Jeep";
console.log(carros) // [ 'Volvo', 'Jeep' ]

var motos = new Array("BMW", "Yamaha");

// Calcular a media de todos os numeros de um array
var media = soma/valores.length;
console.log(media) // 5.4

// Localizar o maior valor dentro de um Array
var maiorValor = Math.max(...valores);
console.log(maiorValor) // 9

console.log(" ")
// ----------------------------------------------------------------------------------------

/* Metodos de Array
.shift() = retirar um numero
.indexOf() = posicao do valor que eu quero
.push() = adicionando um valor no array
.pop() = retirando o ultimo valor do array
.reverse() = invertendo o array
*/

var arr1 = [1,2,3,4,5,6];
console.log(arr1.join('|')); // 1|2|3|4|5|6

var retirado = arr1.shift();
console.log("Retirando o valor 1 do array: " + retirado); // Retirei o 1
console.log(arr1); // [ 2, 3, 4, 5, 6 ]

console.log("Posicao do numero 3: " + arr1.indexOf(3)); // 1

arr1.push(7); // Adicionando o valor 7 no Array 1
console.log(arr1); // [ 2, 3, 4, 5, 6, 7 ]

arr1.pop(); // Tirando o ultimo elemento do array
console.log(arr1); // [ 2, 3, 4, 5, 6 ]

console.log("Array invertido: " + arr1.reverse()); // 6,5,4,3,2


//Como criar um novo array que tenha somente numeros positivos
var arr2 = [-5, 10,15,20,-3,89];
var numerosPositivos = [];

// Usando um loop for para verificar e adicionar números positivos
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] > 0) {
        numerosPositivos.push(arr2[i]);
    }
}
console.log(numerosPositivos); // [ 10, 15, 20, 89 ]


