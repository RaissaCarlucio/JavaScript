class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("Ola " + this.nome);
    }

    get nomeCompleto(){
        console.log("Ola " + this.nome + " " + this.sobrenome);
    }
}

p1 = new Pessoa("Adrian", "Fortes");
p1.falar();
p1.nomeCompleto // Nao precisa colocar o () pois estamos fazendo com o get

/*

Getters são úteis para criar propriedades calculadas que devem ser acessadas de forma semelhante às outras propriedades do objeto.
Métodos são mais apropriados para operações que podem mudar o estado do objeto ou que precisam de parâmetros.


*/
