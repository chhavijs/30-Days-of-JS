//5. Enhanced Object Literals Script
//This script uses enhanced object literals to create and log an object with methods and computed property names.


// Enhanced Object Literals Script

let propertyName = "favoriteFood";
let food = "pizza";

let person = {
    name: "Alice",
    age: 30,
    [propertyName]: food,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person);
person.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(`Favorite Food: ${person.favoriteFood}`); // pizza