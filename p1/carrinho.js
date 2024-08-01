const shoppingCart = [];

function addItemToCart(item){
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item); 
    if(index !== -1){ // !== significa que tem que ser diferente exatamente de -1
        // Se o item nao existe no caminho:
        shoppingCart.splice(index,1) // tira do carrinho 1 elemento
    }
}

function viewCart(){
    if(shoppingCart.length == 0){
        console.log("Your shopping cart is empty")
    }else{
        console.log("Itens in your shopping cart: ")
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(`${i+1} - ${shoppingCart[i]}`)
        }
    }
}

function clearCart(){
    shoppingCart.length = 0;
    console.log("Your shopping cart has been cleared")
}

addItemToCart("Blusa")
addItemToCart("Short")

viewCart()
removeItemFromCart("Short")
viewCart()

clearCart()
viewCart()