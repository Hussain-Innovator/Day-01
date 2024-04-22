// Class with Constructor and Object
class Product{
    name: string;
    price: number;
    quantity: number;
    email: string;
    phone: number;
    location: string

    constructor(name: string, price: number, quantity:number,
        email:string, phone: number, location: string){
            this.name = name;
            this.price = price;
            this.quantity = quantity;
            this.email = email;
            this.phone = phone;
            this.location = location;
        }
}

// Create An Object of Type Person

let pInfo = new Product('Salajeet', 6900, 12, 'hussain@gmail.com', 
123456467, 'DEfence View Phase- II');

console.log(pInfo)