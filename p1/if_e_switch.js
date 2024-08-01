var pais = "Brasil";

if(pais != "Brasil"){
    console.log("Voce nao e brasileiro");
}else{
    console.log("Voce e brasileiro");
}

var idade = 22;
if(idade < 18){
    console.log("Voce e menor de idade");
}else if(idade >= 18 && idade <= 24){
    console.log("Voce faz faculdade");
}else{
    console.log("Voce e clt");
}

// --------------------------------------------------------------------------------------

var diaSem = 1;

switch(diaSem){
    case 1:
        console.log("Domingo");
        break;
    case 2: 
        console.log("Segunda");
        break;
    case 3:
        console.log("Terca");
        break;
    case 4: 
        console.log("Quarta");
        break;
    default:
        console.log("Esse dia da semana nao existe")
}

// --------------------------------------------------------------------------------------

var bebida = "Leite";
var valor;

    // Avalia a escolha com a instrução switch
switch (bebida) {
    case 'Café':
        valor = 5.00;
        console.log(`Você escolheu café. O valor a ser pago é R$ ${valor.toFixed(2)}`);
        break;
    case 'Leite':
        valor = 2.50;
        console.log(`Você escolheu leite. O valor a ser pago é R$ ${valor.toFixed(2)}`);
        break;
    case 'Chá':
        valor = 1.00;
        console.log(`Você escolheu chá. O valor a ser pago é R$ ${valor.toFixed(2)}`);
        break;
    default:
        console.log("Opção inválida. Escolha entre café, leite ou chá.");
        break;
    }


