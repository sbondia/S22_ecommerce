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
}
buy(2)
console.log(cart)

// Exercise 2
function cleanCart() {
    cart.splice(0, cart.length)
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}
// --- Utils ---
function findItemById(array, numId){
    return array.find(item=> item.id==numId)
    /*
    let aux = -1
    for(let i; i<products.length; i++){
        if(products[i].id==numId) {aux=i}
    }
    return aux
    */
}