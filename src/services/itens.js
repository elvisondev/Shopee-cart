export default creatItem
//Criar items com subtotal certo
async function creatItem(name, price, quantity) {
  return{
    name,
    price,
    quantity,
    subtotal: () => price * quantity

  }
}