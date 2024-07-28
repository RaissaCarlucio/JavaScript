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
console.log(" ")

// ----------------------------------------------------------------------------------------
/*
Arrays avancado

Splice = da um corte no Array. Primeiro a posicao e depois quantos eu quero tirar(1,1, "Substituir, "Adicionar")
Quero tirar a posicao 1, o valor 1 e tambem posso Substituir e Adicionar

Unshift = serve para adicionar elementos no comeco do Array

*/

var arr3 = [1,2,3,4,5,6,7];
arr3.splice(2,2); 
console.log(arr3); // [ 1, 2, 5, 6, 7 ]

var nomes = ["Maria","Joao","Lucas","Adrian"];
var novos = nomes.splice(1,2,"Luiz", "Ronaldo");
console.log(novos); // [ 'Joao', 'Lucas' ] -> Quem eu tirei
console.log(nomes); // [ 'Maria', 'Luiz', 'Ronaldo', 'Adrian' ]

// Tambem posso adicionar aonde nao tem posicoes:
var novos = nomes.splice(4,1,"Raissa");
console.log(nomes); // [ 'Maria', 'Luiz', 'Ronaldo', 'Adrian', 'Raissa' ]

var pais = ["Brasil","Argentina","Colombia"];
pais.unshift("Uruguai");
console.log(pais) // [ 'Uruguai', 'Brasil', 'Argentina', 'Colombia' ]

// Crie um Array com 5 nomes. Acrescente um nome: Monica. Retire o ultimo elemento do Array. Encotre a posicao do Samuel. Troque o Manuel por Emanuel
var nomes5 = ["Guilherme", "Samuel", "Manoel", "Jose", "Raissa"]
nomes5.splice(4,1);
nomes5.splice(2,1, "Emanoel");
nomes5.unshift("Monica");
console.log(nomes5) // [ 'Monica', 'Guilherme', 'Samuel', 'Emanoel', 'Jose' ]

var posicaoSamuel = nomes5.indexOf("Samuel");
console.log(posicaoSamuel) // 2
console.log(" ")
// ----------------------------------------------------------------------------------------
/*

Slice = copia uma parte de um array e retorna como um novo array. Nao modifica o array original
concat = Junta duas partes e apos essa juncao ele retorna um novo array A + B = AB

*/

var pessoa = ["Eduardo","Joana","Wallace","Rosana"];
var gerente = ["Davi", "Manoela"];

var pessoas1 = pessoa.slice(1,3);
console.log(pessoa); // [ 'Eduardo', 'Joana', 'Wallace', 'Rosana' ]
console.log(pessoas1); // [ 'Joana', 'Wallace' ]

var empresa = pessoa.concat(gerente);
console.log(empresa) // [ 'Eduardo', 'Joana', 'Wallace', 'Rosana', 'Davi', 'Manoela' ] -> Adicionando os 2 Arrays em um novo


// Array com todos os meses do ano. Dividir ele em trimestres. 
var meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var t1 = meses.slice(0,3);
var t2 = meses.slice(3,6);
var t3 = meses.slice(6,9);
var t4 = meses.slice(9,12);
console.log(t1,t2,t3,t4); // [ 'Janeiro', 'Fevereiro', 'Marco' ] [ 'Abril', 'Maio', 'Junho' ] [ 'Julho', 'Agosto', 'Setembro' ] [ 'Outubro', 'Novembro', 'Dezembro' ]

console.log(" ");
// ----------------------------------------------------------------------------------------
/*
filter = utilizado para filtrar do array a condicao exigida

*/

var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.filter(item => item % 2 == 0) // Para cada elemento do meu array, ele vai pegar os numeros que sao divididos por 2
console.log(resultado); // [ 2, 4, 6, 8, 10 ]

var numerosFiltrados = numeros.filter( // Outra forma de fazer o filter p1
    function(valor){
        return valor > 5;
    }
);
console.log(numerosFiltrados); // [ 6, 7, 8, 9, 10 ]

function buscarValores(valor){ // Outra forma de fazer o filter p2
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados); // [ 1, 2, 3, 4 ]

var r1 = numeros.filter((valor) => { // Outra forma de fazer o filter p3
    return valor > 5;
})
console.log(r1) // [ 6, 7, 8, 9, 10 ]

var funcionario = [
    {nome: "Luiz", idade: 62}, 
    {nome: "Davi", idade: 22}, 
    {nome: "Arthur", idade: 18}, 
    {nome: "Lucas", idade: 40}, 
]

var pessoasListagem2 = funcionario.filter( valor => console.log(valor.nome));
var pessoasListagem3 = funcionario.filter( valor => console.log(valor.idade));


var pessoasListagem = funcionario.filter(
    function(valor){
        return valor.nome.length < 5; // Todos os nomes que tiverem < que 5 letras sera printado
    }
)

console.log(pessoasListagem); // [ { nome: 'Luiz', idade: 62 }, { nome: 'Davi', idade: 22 } ]

// Mostre o id e a descricao dos produtos com a categoria Eletronico:
var produtos = [
    {id: 1, descricao: "SmartPhone", categoria: "Eletronico"}, 
    {id: 2, descricao: "Notebook", categoria: "Eletronico"}, 
    {id: 3, descricao: "Geladeira", categoria: "Eletrodomestico"}, 
    {id: 4, descricao: "Raissa", categoria: "Objeto🥵"}, 
]

var filtroCategoria = produtos.filter(
    function(valor){
        return valor.categoria == "Eletronico";
    }
)

console.log(filtroCategoria);
console.log(" ")
// ----------------------------------------------------------------------------------------
/*

O metodo Array.map() permite voce iterar sobre o array e modificar seus elementos usando uma funcao de callback.
A funcao de callback sera executada em cada um dos elementos do array

Reduce = reduz um array de valores a um unico valor.

forEach = usado para percorrer arrays, mas usa uma funcao de modo diferente do "laco for" tradicional

*/

var num3 = [1,2,3,4,5,6,7,8,9,10];

var nums = num3.map(function(valor){
    return valor * 2;
});
console.log(nums); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

var funcionario1 = [
    {nome: "Luiz", idade: 62}, 
    {nome: "Davi", idade: 22}, 
    {nome: "Arthur", idade: 18}, 
    {nome: "Lucas", idade: 40}, 
]

nomes1 = funcionario1.map(pessoa2 => pessoa2.nome)
console.log(nomes1); // [ 'Luiz', 'Davi', 'Arthur', 'Lucas' ]

console.log(" ")
// Reduce:
total = 0;
for (var i = 0; i < num3.length; i++){
    total += num3[i]
}
 console.log(total); // 55

 // ou:

 var tot = num3.reduce(function(total,numero){
    return total + numero;
 },0);
console.log(tot); // 55

console.log(" ")
// forEach:
var a = [10,20,30,40,50,60];
//for (let valor of a){
//    console.log(valor);
//}

a.forEach(valor => console.log(valor)); // 10 20 30 40 50 60

var tot1 = 0;
a.forEach(valor => {
    tot1 += valor; // 210
})
console.log(tot1);