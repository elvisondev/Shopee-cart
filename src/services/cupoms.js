export { discountCoupon, typeCoupon, displayCheckout}


// Tipo de desconto
async function typeCoupon(coupon) {
  if (coupon === 'DIO10') {
    return 0.1
  } else if (coupon === 'SHOPEE20') {
    return 0.2
  } else {
    console.log(`Cupom ${coupon} é inválido!`)
  }
}
// valor do desconto
async function discountCoupon(subtotal, discount) {
  let resultDiscount = subtotal * discount 
  let totalToPay = subtotal - resultDiscount
  
  return {
    resultDiscount,
    totalToPay
  }
}

async function displayCheckout(total, couponApplied, discount, discountValue, totalToPay) {
  console.log ("\n🛒 Shoppe cart CHECKOUT: \n")
  console.log(`💰 Total: R$ ${total}`)
  console.log(`🎟️ Coupon applied: ${couponApplied}`)
  console.log(`📉 Discount: de ${(discount * 100).toFixed(0)}%`)
  console.log(`💸 Discount value: aplicado é de R$ ${(discountValue).toFixed(2)}`)
  console.log(`💳 Total to pay: ${(totalToPay).toFixed(2)}`)
}
