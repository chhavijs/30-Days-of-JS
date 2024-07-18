//Function Declaration
//1-to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

checkEvenOrOdd(4);

//2-to calculate the square of a number 
function calculateSquare(number) {
    return number * number;
}

let square = calculateSquare(5);
console.log(`The square of 5 is ${square}.`);

// Function Expression

//3-maximum of two numbers
const findMax = function(num1, num2) {
    let max = (num1 > num2) ? num1 : num2;
    console.log(`The maximum of ${num1} and ${num2} is ${max}.`);
};

findMax(3, 7);

//4-concatenate two strings 
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

let result = concatenateStrings("Hello, ", "world!");
console.log(result);


//Arrow Functions
//5-Write an arrow function to calculate the sum of two numbers
const sum = (a, b) => a + b;

let total = sum(3, 4);
console.log(`The sum of 3 and 4 is ${total}.`);

//6-Write an arrow function to check if a string contains a specific character and return a boolean value
const containsCharacter = (str, char) => str.includes(char);

let contains = containsCharacter("hello", "e");
console.log(`Does "hello" contain "e"? ${contains}`);

//Function Parameters and Default Values
//7-Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(a, b = 1) {
    return a * b;
}

let product = multiply(5, 2);
console.log(`The product of 5 and 2 is ${product}.`);
product = multiply(5);
console.log(`The product of 5 and the default value 1 is ${product}.`);


//8-function that takes a person's name and age and returns a greeting message. Provide a default value for the age

function greet(name, age = "unknown") {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

let greeting = greet("Janvi", 21);
console.log(greeting);
greeting = greet("Chhavi");
console.log(greeting);

//Higher-Order Functions
//9-higher-order function that takes a function and a number, and calls the function that many times

function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
repeatFunction(() => console.log("Hello!"), 3);
//10-higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result

function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}


const addTwo = num => num + 2;
const multiplyByThree = num => num * 3;

let resul = applyFunctions(addTwo, multiplyByThree, 5);
console.log(result); 