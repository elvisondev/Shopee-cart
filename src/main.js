import * as cartService from "./services/cart.js"
import * as coupons from "./services/cupoms.js"
import creatItem  from "./services/itens.js"

const myCart = [];
let couponCode = "aBC123DA"

console.log("Welcome to the your Shopee cart!")

//Criando os dois itens
const item1 = await creatItem ("Hotwheels ferrari", 49.99, 3)
const item2 = await creatItem ("Hotwheels lamborghini", 40.00, 3)

//Adiciona dois itens ao carrinho
await cartService.addItem(myCart, item1, )
await cartService.addItem(myCart, item2)

await cartService.removeItem(myCart, item2)

//Mostra meu itens do carrinho
await cartService.displayCart(myCart)

//Caulcula valor total do carrinho
const cartTotal = await cartService.calculateTotal(myCart)
let discount = await coupons.typeCoupon(couponCode);
const discountValuePay = await coupons.discountCoupon(cartTotal, discount)

await coupons.displayCheckout(cartTotal, couponCode, discount, discountValuePay.resultDiscount, discountValuePay.totalToPay)


