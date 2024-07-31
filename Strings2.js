/*
.split() = Vai dividir a minha string em 2 a partir daquilo que coloquei dentro dessa funcao
*/


var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";

const parametros = url.split("?")[1]
console.log(parametros) // String dividida em 2 pedacos, mas como coloquei 1, pegou a 2 parte

const parametros2 = parametros.split("&")
console.log(parametros2)

for(let i = 0; i < parametros2.length ; i++){
    if(parametros2[i].startsWith("atores=")){
        parametros2[i] = "atores=" + parametros2[i].substring(7).toLocaleUpperCase();
    }
}
console.log(parametros2)


var a,b,c;

console.log(b)