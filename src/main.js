import chalk from "chalk";
import * as cartService from "./services/cart.js"
import * as coupons from "./services/cupoms.js"
import creatItem  from "./services/itens.js"

const myCart = [];
let couponCode = "SHOPEE20"

console.log ("==================================================================================")
console.log(chalk.yellow.bold('SHOPEE CART').padStart(60))
console.log ("==================================================================================")
console.log(`${chalk.white.bold("ITEM".padEnd(35))} ${chalk.white.bold("PRICE".padStart(15))} ${chalk.white.bold("AMOUNT".padStart(15))} ${chalk.white.bold("SUBTOTAL".padStart(14))}`)


//Criando os dois itens
const item1 = await creatItem ("Hotwheels Ferrari",  49.99, 3)
const item2 = await creatItem ("Hotwheels Lamborghini".padEnd(25), 40.00, 3)

//Adiciona dois itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
//Remove item do carrinho
await cartService.removeItem(myCart, item2)
//Mostra meu itens do carrinho
await cartService.displayCart(myCart)
//Caulcula valor total do carrinho
const cartTotal = await cartService.calculateTotal(myCart)
let discount = await coupons.typeCoupon(couponCode);
const discountValuePay = await coupons.discountCoupon(cartTotal, discount)

//Monta meu dysplay cart chelout
await coupons.displayCheckout(cartTotal, couponCode, discount, discountValuePay.resultDiscount, discountValuePay.totalToPay)


