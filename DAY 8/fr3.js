//3. Spread and Rest Operators Script
//This script demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.


// Spread and Rest Operators Script

// Spread Operator to combine arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log(`Combined Array: ${combinedArray}`); // [1, 2, 3, 4, 5, 6]

// Rest Operator to handle multiple function arguments
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}
console.log(`Sum: ${sum(1, 2, 3)}`); // 6
console.log(`Sum: ${sum(4, 5, 6, 7)}`); // 22