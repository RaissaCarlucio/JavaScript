// Permite que classes compartilhem atributos e metodos atraves de hierarquia

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Ja esta ligado")
            return;
        }
        this.ligado = true;
    }
}

class SmartPhone extends DispositivoEletronico{ // Tudo que tem no dispositivo eletronico vai ser reaproveitado
    constructor(nome, cor, modelo){
        super(nome); // nome do dispositivo eletronico
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new SmartPhone("Samsung", "Preto", "A71")
s1.ligar();
console.log(s1)