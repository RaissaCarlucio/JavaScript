// 1 - forma de criar objetos

const pessoa = {
    nome: "Lucas",
    sobrenome: "Silva"
}

console.log(pessoa["nome"]); // Lucas
console.log(pessoa["sobrenome"]); // Silva

// 2 - forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Karen";
funcionario.sobrenome = "Joana";

console.log(funcionario.nome) // Karen

// 3 - forma de criar objetos
function criarPessoa(nome, sobrenome, i){
    return {
        nome, 
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criarPessoa("Arthur", "Silva", 23);
const p2 = criarPessoa("Joao", "Silva", 19)
console.log(p1.nomeCompleto) // Arthur Silva
console.log(p2) // { nome: 'Joao', sobrenome: 'Silva', nomeCompleto: [Getter] }
console.log(p2.nome) // Joao

