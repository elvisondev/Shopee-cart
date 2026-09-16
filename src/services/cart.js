export { addItem, calculateTotal, deleteItem, removeItem, displayCart }
// QUAIS AÇÕES MEU CARRINHO PODE FAZER => COLOCAR ASINATURA DO METODO NOME DA FUNÇÃO()

//CASOS DE USO

// Adicionar item ✅
async function addItem(userCart, item) {
  //PUSH uma fução do JS pra adicionar um elemento dentro de um vetor
  userCart.push(item)
}
// Deletar item do carrinho
async function deleteItem(userCart, name) {
  //FINDINDEX Eu consigo procurar qual o index daquele vetor o nome do item
  const index = userCart.f
  indIndex(item => item.name === name)
  //SPLICE Ele corta uma zona (deleta algo)
  if (index !== -1) {
    userCart.splice(index, 1)
  }
}
async function removeItem(userCart, item){
  //1. Encontra o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name)

  //2. Caso não encontre o item 
   if(indexFound == - 1){
    console.log("Não encontrado")
    return
   }
   //3. Item  > 1 subrair um item
   //Olhando meu carrinho indice 1 como exemplo, quero que seja pegue a propiedade quantidade do elemento do indice 1
   if(userCart[indexFound].quantity > 1){
    //Pegando o valor que está dentro de quantity e diminuido 1 atrbuindo o própio valor dele -1
    userCart[indexFound].quantity -= 1
    return;
   }

   //4. Caso o item = 1 delete o item
   if(userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1)
   }
}

// Cálcular o total
async function calculateTotal(userCart) {
  // REDUCE ele permite pegar algum item interagir com todos os itens como se fosse um for e reduzir aqulilo ao um valor
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)

  return result
}

async function displayCart(userCart) {

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    )
  })
}
