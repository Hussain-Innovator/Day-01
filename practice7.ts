// TypeScript class representing cars 
// with properties for make, model, and year

class Cars{
    make : string;
    model : string;
    year : number;

    constructor(make : string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
};

const car1 = new Cars("Toyota", "Camery",2018);
const car2 = new Cars("Hona", "Civic", 2019);
const car3 = new Cars("Ford", "Mustang", 2020);

const carsInfo: Cars[] = [car1,car2, car3];
console.log(carsInfo);
