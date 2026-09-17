import chalk, { Chalk } from 'chalk'

export { discountCoupon, typeCoupon, displayCheckout }

// Tipo de desconto
async function typeCoupon(coupon) {
  if (coupon === 'DIO10') {
    return 0.1
  } else if (coupon === 'SHOPEE20') {
    return 0.2
  } else if (coupon === '') {
    return 0
  } else {
    return 0
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

async function displayCheckout(
  total,
  couponApplied,
  discount,
  discountValue,
  totalToPay
) {
  if (discount > 0) {
    console.log('==================================================================================')
    console.log(chalk.yellow.bold('SHOPEE CART').padStart(60))
    console.log('==================================================================================')

    console.log(`💰 Total:  ${chalk.yellow("R$ " +total).padStart(80)}`)
    console.log(`🎟️ Coupon applied: ${chalk.green(couponApplied)} ${chalk.green.bold(discount * 100 + "%").padStart(73)}`)
    console.log(`💸 Discount applied:${chalk.green.bold("-R$ "  + discountValue.toFixed(2)).padStart(80)}`)
     console.log("----------------------------------------------------------------------------------")
    console.log(`💳 Total to pay: ${chalk.green.bold("R$ " + totalToPay.toFixed(2)).padStart(83)}`)
    console.log("----------------------------------------------------------------------------------")
  } else if (couponApplied === '') {
    console.log('==================================================================================')
    console.log(chalk.yellow.bold('SHOPEE CART').padStart(60))
    console.log('==================================================================================')

    console.log(`💰 Total:  ${chalk.green("R$ " +total).padStart(80)}`)
    console.log(chalk.yellow.bold(`🎟️  No discount coupon applied`))
    console.log("----------------------------------------------------------------------------------")
  } else if (discount === 0) {
    console.log('==================================================================================')
    console.log((chalk.yellow.bold('SHOPEE CART').padStart(60)))
    console.log('==================================================================================')
    console.log(`💰 Total:  ${chalk.green("R$ " +total).padStart(80)}`)
    console.log(chalk.red.bold(`❌ Coupon ${couponApplied} is invalid`))
    console.log("----------------------------------------------------------------------------------")
  }
}
