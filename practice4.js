"use strict";
// Class with Constructor and Object
class Product {
    constructor(name, price, quantity, email, phone, location) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.email = email;
        this.phone = phone;
        this.location = location;
    }
}
// Create An Object of Type Person
let pInfo = new Product('Salajeet', 6900, 12, 'hussain@gmail.com', 123456467, 'DEfence View Phase- II');
console.log(pInfo);
