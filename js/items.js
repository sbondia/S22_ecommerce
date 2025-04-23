"use strict"
class Item{
    constructor(id, name, price, type, offer=null){
        this._id = id
        this._name = name
        this._count = 0
        this._price = price
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
    get category() {return this._category}
    get discount() {return this._discount}
    set count(value) {this._count = value}
    updatePrice(){
        this.price = this.price*this.count
    }
    setDiscount(){
        if(this.discount!=null && this.discount.minItems>=this.count){
            this.price = this.price*((100-this.discount)/100)
        }
    }
}
products.forEach(product=>{
    items.push(new Item(product.id, product.name, product.price, product.type, product.offer))
})
console.log(items)