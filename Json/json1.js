const pessoa = {
    nome: 'Joao',
    idade: 25,
    profissao: "Desenvolvedor"
}

const pessoajson = JSON.stringify(pessoa) // Pega um Objeto e transforma em uma string Json
console.log(pessoa)
console.log(pessoajson)

const pessoaObj = JSON.parse(pessoajson) // String Json para objeto de JavaScript
console.log(pessoaObj)

