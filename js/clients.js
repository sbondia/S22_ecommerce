"use strict"
class Client{
    constructor(id, nameFirst, nameLast, password, address, numPhone){
        this.id = id
        this.nameFirst = nameFirst
        this.nameLast = nameLast
        this.password = password
        this.address = address
        this.numPhone = numPhone
        this.cartHistory = []
    }
    addCart(cart){
        this.cartHistory.push(cart)
    }
}