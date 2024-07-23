//Default Parameters Script
//This script defines a function with default parameters and logs the results of calling it with different arguments.


// Default Parameters Script

function multiply(a, b = 1) {
    return a * b;
}

console.log(`Multiply with two arguments: ${multiply(5, 2)}`); // 10
console.log(`Multiply with one argument: ${multiply(5)}`);