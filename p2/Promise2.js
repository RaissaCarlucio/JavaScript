function somaArray(array){
    return new Promise((resolve,reject) => {
        if(!Array.isArray(array)){ // Se nao for um Array:
            reject("O argumento passado nao é um array")
        }
        const soma = array.reduce((total,num)=> total + num,0);
        resolve(soma)
    })
}

const myArray = [1,2,3,4,5]
somaArray(myArray)
.then((resultado)=>{
    console.log("A soma dos elementos é: " + resultado)
})
.catch((erro)=>{
    console.log("Ocorreu um erro: " + erro)
})
