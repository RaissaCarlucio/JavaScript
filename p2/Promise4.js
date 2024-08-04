function obterValor(valor){
    return new Promise((resolve, reject) => {
        if(valor > 10){
            valor += 1;
            resolve(valor)
        }else{
            reject("Nao foi possivel obter o valor")
        }
    })
}

function dobrarValor(valor){
    return valor * 2;
}

function adicionar10(valor){
    return valor + 10;
}

// resolve = tudo que der certo = .then
// reject = tudo que der errado = .catch

obterValor(28)
.then((valor) => {
    console.log("Valor obtido: " + valor)
    return dobrarValor(valor);
})
.then((novoValor)=>{
    console.log("Fazendo o segundo tratamento: ")
    return adicionar10(novoValor)
})
.then((resultadoFinal) => {
    resultadoFinal += 5
    console.log("O resultado final é: " + resultadoFinal)
})
.catch((erro)=>{
    console.log("Ocorreu um erro: " + erro)
})