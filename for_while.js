var carros = [{modelo: 'Audio A3', marca: 'Audi', ano: 2020},
             {modelo: 'Compass', marca: 'Jeep', ano: 2021}
]

for(let caracteristica in carros){
    console.log(carros[caracteristica]);
}

for(let carro of carros){
    console.log(carro.marca)
}

for(i=0; i< carros.length; i++){
    console.log(carros[i].marca)
}

var c = 1;
while(c <= 10){ // Vai rodar enquanto essa informacao for verdadeira
    console.log(c);
    c++
}

// Do while vai executar nem que for 1x pelo menos.
var t = 0;
do{
    console.log(t);
    t++
}while(t<=1) // Se isso for verdade ele vai continuar rodando.
