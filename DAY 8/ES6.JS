//Template Literals
//1- Use template literals to create a string that includes variables for a person's name and age.

//Template literals are a way to embed variables and expressions directly in strings. They use backticks (`) instead of quotes.

let name = "Chhavijs";
let age = 21;

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

//2- Create a multi-line string using template literals and log it to the console.

//Template literals also allow you to create multi-line strings easily.

let multiLineString = `I love travelling,
listening to music,
designing.`;

console.log(multiLineString);

//Destructuring
//3-Use array destructuring to extract the first and second elements from an array of numbers 
//Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

let numbers = [10, 20, 30, 40];

let [first, second] = numbers;// *
console.log(first); 
console.log(second); 

//Use object destructuring to extract the title and author from a book object 
let book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};

let { title, author } = book; //*
console.log(title);  // "1984"
console.log(author); // "George Orwell"

//Spread and Rest Operators
//5- Use the spread operator to create a new array that includes all elements of an existing array plus additional elements

//The spread operator (...) allows you to expand an iterable (like an array) into individual elements.


let oldArray = [1, 2, 3];
let newArray = [...oldArray, 4, 5, 6];

console.log(newArray); // [1, 2, 3, 4, 5, 6]

//6-Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

//The rest operator (...) allows you to represent an indefinite number of arguments as an array.


function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22


//Default Parameters
//7- Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

//Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.


function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5

//Enhanced Object Literals
//8-Use enhanced object literals to create an object with methods and properties, and log the object to the console.

//Enhanced object literals make it easier to create objects by simplifying the syntax for properties and methods.


let namee = "Alice";
let agee = 30;

let person = {
    namee,
    agee,
    greet() {
        console.log(`Hello, my name is ${this.namee} and I am ${this.agee} years old.`);
    }
};

console.log(person);
person.greet();

//9-Create an object with computed property names based on variables and log the object to the console.

//Computed property names allow you to use the value of a variable as the property name.

let propName = "favoriteColor";
let color = "blue";

let obj = {
    [propName]: color
};

console.log(obj); // { favoriteColor: "blue" }
