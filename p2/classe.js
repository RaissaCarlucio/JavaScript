class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("Ola " + this.nome);
    }
}

p1 = new Pessoa("Adrian", "Fortes");
p1.falar();