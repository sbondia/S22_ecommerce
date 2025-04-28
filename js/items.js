"use strict"
class Item{
    constructor(id, name, itemPrice, type, offer=null){
        this._id = id
        this._name = name
        this._count = 0
        this._price = 0
        this._basePrice = itemPrice
        this._category = type
        if(!offer) {this._discount = null}
        else{
            this._discount = {
                minItems: offer.number,
                percent: offer.percent
            }
        }
    }
    get id() {return this._id}
    get name() {return this._name}
    get count() {return this._count}
    get price() {return this._price}
    get basePrice() {return this._basePrice}
    get category() {return this._category}
    get discount() {return this._discount}
    set count(value) {this._count = value}
    set price(value) {this._price = value}
    addItem(){
        this.count++
        this.updatePrice()
    }
    removeItem(){
        this.count--
        this.updatePrice()
    }
    updatePrice(){
        this.price = this.basePrice*this.count
        if(this.discount!=null && this.count>=this.discount.minItems){
            this.price = this.price*((100-this.discount.percent)/100)
        }
    }
}
/*
products.forEach(product=>{
    items.push(new Item(product.id, product.name, product.price, product.type, product.offer))
})
*/