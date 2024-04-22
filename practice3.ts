// Interface with objects
interface person{
    name: string;
    age: number;
    email: string;
    phone: number;
    location: string;
}

// Create object of type Person
let personalInfo: person = {
    name: 'Hussain',
    age: 24,
    email: 'hussain@gmail.com',
    phone: 1234567890,
    location: 'defence view phase-II'
};

console.log(personalInfo);