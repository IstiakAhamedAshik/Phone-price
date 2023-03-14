function updatePhonePrice(getValue, product, num) {
  const getPhone = document.getElementById(product + '-quantity')
  let getPhonesPrevious = getPhone.value
  if (getValue == true) {
    getPhonesPrevious = parseInt(getPhonesPrevious) + 1
  } else if (getPhonesPrevious > 0) {
    getPhonesPrevious = parseInt(getPhonesPrevious) - 1
  }
  getPhone.value = getPhonesPrevious
  const getprice = document.getElementById(product + '-price')
  let totalPrice = getPhonesPrevious * num
  getprice.innerText = totalPrice
  getTotalcoast()
}
// ////////
function getPhoneInput(product) {
  let phone = document.getElementById(product + '-quantity')
  totalPhone = parseInt(phone.value)
  return totalPhone
}

function getTotalcoast() {
  let subtotalcase = getPhoneInput('phone') * 1290
  let subtotalPhone = getPhoneInput('case') * 80
  let subtotal = subtotalcase + subtotalPhone
  let tax = subtotal / 10
  let total = subtotal + tax
  let getsubtotal = document.getElementById('subtotal')
  let gettax = document.getElementById('tax')
  let gettotal = document.getElementById('total')
  getsubtotal.innerText = subtotal
  gettax.innerText = tax
  gettotal.innerText = total
}
// ////
document.getElementById('incries').addEventListener('click', function () {
  updatePhonePrice(true, 'case', 80)
})
document.getElementById('decrise').addEventListener('click', function () {
  updatePhonePrice(false, 'case', 80)
})
document.getElementById('incries-phone').addEventListener('click', function () {
  updatePhonePrice(true, 'phone', 1290)
})
document.getElementById('decrise-phone').addEventListener('click', function () {
  updatePhonePrice(false, 'phone', 1290)

  // const getPhone = document.getElementById('quantity-phone')
  // let getPhonesPrevious = getPhone.value
  // let totalPhone = parseInt(getPhonesPrevious) - 1
  // getPhone.value = totalPhone
  // const getprice = document.getElementById('price-phone')
  // let totalPrice = totalPhone * 1290
  // getprice.innerText = totalPrice
})
