var n = 3;
//n = n - 10;
n *= 10;
console.log(n)

var x = 10;
x++
console.log(x);

a = 10;
b = 20;
c = 60; 

console.log("Teste 1: " + (n <= x && b != c)) // false

// Verificar se a e maior que b e b e divisivel por 2
console.log("Teste 2: " + (a > b && b % 2 == 0)) // false

// Verificar se b e maior igual a ou b dividido por 2 o resultado e 2
console.log("Teste 3: " + (b >= a || b/2 == 2)) // true

// Verificar se a e maior que b e b maior igual a 5
console.log("Teste 4: " + (a > b && b >= 5)) // false

// Verificar se b e par ou impar usando ternario
resultado = b % 2 == 0 ? "Par" : "Impar";
console.log("Teste 5: " + resultado) // Par