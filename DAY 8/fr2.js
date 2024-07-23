//Destructuring Script
//This script uses array and object destructuring to extract values and log them.

// Destructuring Script

// Array Destructuring
let numbersArray = [10, 20, 30, 40];
let [firstNumber, secondNumber] = numbersArray;
console.log(`First number: ${firstNumber}`); // 10
console.log(`Second number: ${secondNumber}`); // 20

// Object Destructuring
let bookObject = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};
let { title, author } = bookObject;
console.log(`Title: ${title}`); // The Great Gatsby
console.log(`Author: ${author}`); // F. Scott Fitzgerald 