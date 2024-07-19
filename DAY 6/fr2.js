//Array Transformation Script

let numbers = [1, 2, 3, 4, 5];

// Using map to double each number
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// Using filter to get only even numbers
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// Using reduce to sum all numbers
let total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total);
