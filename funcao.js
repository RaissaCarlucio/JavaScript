// Funcao regular
function multiplicar(x,y){
    return(x*y);
}

var a = multiplicar(4,2);
console.log(a); // 8

function somaValores(a, b = 2, c = 6){
    var total = a + b + c
    return total
}

var f = somaValores(8) // mas se eu escrever por exemplo b = 5, ele vai dar prioridade se eu escrever aqui
console.log(f) // 16


// Funcao anonima:
var funcao_anonima = function(a,b,c){
    return a + b + c
}

console.log(funcao_anonima(2,5,7)) // 14

// Arrow function
const soma = (num1,num2) =>{
    return num1 + num2
}
console.log(soma(3,6))

const numeros = [1,2,3,4,5]
const valores = numeros.map((num) => num * num)
console.log(valores)

var listaProdutos = ["geladeira", "fogao", "sir fryer"]
var listaMaiuscula = listaProdutos.map(primeiraMaiuscula);

function primeiraMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)// charAt(0) significa que estou pegando a 1 letra
}

console.log(listaMaiuscula)