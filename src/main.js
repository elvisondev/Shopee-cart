import * as cartService from "./services/cart.js"
import creatItem  from "./services/itens.js"

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee cart!")

//Criando os dois itens
const item1 = await creatItem ("Hotwheels ferrari", 20.99, 1)

const item2 = await creatItem ("Hotwheels lamborghini", 39.99, 3)

//Adiciona dois itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)


await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)



// await cartService.removeItem(myCart, 1)

await cartService.displayCart(myCart)
//Delete dois itens do carrinho
// await cartService.deleteItem(myCart, item1.name)
// await cartService.deleteItem(myCart, item2.name)
await cartService.calculateTotal(myCart)