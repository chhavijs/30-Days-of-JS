//Array Creation and Access
//1-Create an array of numbers from 1 to 5 

let array = [1, 2, 3, 4, 5];
console.log(array);

//2- Access the first and last elements of the array 

console.log(array[0]);  //First element
console.log(array[array.length - 1]);  //Last element

//Array Methods(Basic)
//3-Using push method to add a new number to the end of the array 

array.push(6);
console.log(array);

//4-Using pop method to remove the last element from the array 

array.pop();
console.log(array);

//5-Using shift method to remove the first element from the array

array.shift();
console.log(array);

//6-Using the unshift method to add a new number to the beginning of the array 

array.unshift(0);
console.log(array);

//Array Methods(Intermediate)
//Using map method to create a new array where each number is doubled

let doubledArray = array.map(num => num * 2);
console.log(doubledArray);

//8-Using filter method to create a new array with only EVEN numbers 

let evenArray = array.filter(num => num % 2 === 0);
console.log(evenArray);

//9-Use the reduce method to calculate the sum of all numbers 

let sum = array.reduce((acc, num) => acc + num, 0);
console.log(sum);

// Array Iteration
// 10-Using for loop to iterate over the array 


for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//11-using the forEach method to iterate over the array 

array.forEach(num => console.log(num));

//Multi-dimensional Arrays
//12-Creating two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);

//13- Access and log a specific element from the two-dimensional array

console.log(matrix[1][1]);  

