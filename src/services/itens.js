export default creatItem
//CASOS DE USO DOS ITEM

//Criar items com subtotal certo
async function creatItem(name, price, quantity) {
  return{
    name,
    price,
    quantity,
    subtotal: () => price * quantity

  }
}