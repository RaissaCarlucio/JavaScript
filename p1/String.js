/*
.lenght = Retorna o tamanho da String completa com os espacos(letras)
.toLocaleUpperCase() = Deixa a String com letra maiuscula
.indexOf() = Revela a posicao em que esta a String desejada.
.slice(0,9) = posicao inicial, quantas palavras quero que tenha. 
.substring(13,19) = Bem parecido com o slice. 
.includes("") = Verifica se a String existe, retornando true or false
.concat() = junta 2 variveis de string formando 1 so
.trim() = ele tira os espacos finais e iniciais de uma string
.split(","); = Aonde ele encontrar , ele vai transformar o elemento em um Array
.replace(" "," ") = vai mudar a string atual por uma outra que eu querer

*/


var nome = "Marcelo da Silva";
var x = nome.length; 
console.log(x);

resultado = x > 10 ? "Obrigado" : "Por favor preencha seu nome com o sobrenome";
console.log(resultado);

var res = nome.toLocaleUpperCase(); 
console.log(res);

var jogo = "Barcelona vs Real melhor time";
var posicao = jogo.indexOf("Real");
console.log(posicao)

var val = jogo.includes("Real");
console.log(val)

var cortado = jogo.slice(0,9);
console.log(cortado)

var cortado2 = jogo.slice(13,); // Se eu nao colocar nada depois da virgula ele vai ate o final
console.log(cortado2)

var str1 = "Hello";
var str2 = " Turma";
var str3 = str1.concat(str2);
console.log(str3)

var frase = "   Ola voce esta aprendendo JavaScript   ";
console.log(frase.trim())

var num = "1,2,3,4,5,6,7,8";
var array = num.split(",");
console.log(array)

var s = "JavaScript e Python";
var pos1 = s.indexOf("Python")
var novaString = s.substring(13,19)
console.log(novaString) 

var frase = "Ola mundo"
if (frase.startsWith("Ola")){
    let sub = frase.substring(4);
    let novaString2 = sub.replace("mundo", "pessoal")
    let novaString3 = novaString2.toUpperCase();
    console.log(novaString3)
}



