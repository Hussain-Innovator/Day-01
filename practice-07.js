"use strict";
// TypeScript class representing cars 
// with properties for make, model, and year
class Cars {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
;
const car1 = new Cars("Toyota", "Camery", 2018);
const car2 = new Cars("Hona", "Civic", 2019);
const car3 = new Cars("Ford", "Mustang", 2020);
const carsInfo = [car1, car2, car3];
