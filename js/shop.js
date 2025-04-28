var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    let productsItem = findItemById(products, id)
    let cartItem = findItemById(cart, id)
    if(cartItem==undefined){
        cart.push(new Item(productsItem.id, productsItem.name, productsItem.price, productsItem.type, productsItem.offer))
    }
    cartItem = findItemById(cart, id)
    cartItem.addItem()
    rearmRow(id)
    calculateTotal()
}


// Exercise 2
function cleanCart() {
    cart.splice(0, cart.length)
    document.getElementById("cart_list").innerHTML = ''
    document.getElementById("total_price").innerHTML = '0'
    document.getElementById("count_product").innerHTML = '0'
    calculateTotal()
}

// Exercise 3
function calculateTotal() {
    total = 0.00
    cart.forEach(item=> total+=item.price)
    document.getElementById("total_price").innerHTML = total.toFixed(2)
    document.getElementById("count_product").innerHTML = cart.length
    console.log(total, cart.length)
}

/* Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}
*/

// Exercise 5
function printCart() {
    //document.getElementById("cart_list").innerHTML = ''
    //cart.forEach(item=> rearmTable(item.id))
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    let cartItem = findItemById(cart, id)
    cartItem.removeItem()
    rearmRow(id)
    calculateTotal()
}

function open_modal() {
    printCart()
}
// --- Utils ---
function findItemById(array, numId){
    return array.find(item=> item.id==numId)
}

function rearmRow(itemId){
    const item = findItemById(cart, itemId)
    let itemRow =`
        <tr id="rowItem${item.id}">
            <th scope="row">${item.name}</th>
            <td>$${item.basePrice.toFixed(2)}</td>
            <td>
            <img src="images/iconmonstr-plus-circle-filled.svg" alt="+" style="width:24px" onclick="buy(${item.id})">
            ${item.count}
            <img src="images/iconmonstr-minus-circle-filled.svg" alt="-" style="width:24px" onclick="removeFromCart(${item.id})">
            </td>
            <td>$${item.price.toFixed(2)}</td>
        </tr>
    `
    try {document.getElementById(`rowItem${item.id}`).innerHTML = item.count>0 ? itemRow : ''}
    catch(errRowNotFound) {document.getElementById("cart_list").innerHTML += itemRow}
}
