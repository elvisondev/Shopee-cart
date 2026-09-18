export { addItem, calculateTotal, deleteItem, removeItem, displayCart }

// Adicionar item 
async function addItem(userCart, item) {
 
  userCart.push(item)
}
// Deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.f
  indIndex(item => item.name === name)
  if (index !== -1) {
    userCart.splice(index, 1)
  }
}
async function removeItem(userCart, item){
  const indexFound = userCart.findIndex((p) => p.name === item.name)
   if(indexFound == - 1){
    console.log("Não encontrado")
    return
   }
   if(userCart[indexFound].quantity > 1){
  
    userCart[indexFound].quantity -= 1
    return;
   }

   if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1)
   }
}

// Cálcular o total
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)

  return result
}

async function displayCart(userCart) {

  userCart.forEach((item, index) => {
    
    console.log(
      `${(index + 1 +  "." + item.name).padEnd(35)} ${("R$ " + item.price.toFixed(2)).padStart(15)} ${
       (item.quantity + "X" ).padStart(13)
      } ${(item.subtotal().toFixed(2).padStart(15))}`
    )
   
    
  })
}



