//for loop
//1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2
let n = 5;
for (let i = 1; i <= 10; ++i)
    console.log(n * i);

//While loop
let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log("The sum of numbers from 1 to 10 is:", sum);

//4
let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}

// Do While Loop
//5
let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

//6
let num = 5; 
let factorial = 1;
let l = 1;

do {
    factorial *= l;
    l++;
} while (l <= num);

console.log(`The factorial of ${num} is:`, factorial);

//Nested Loops
let rows = 5;

for (let m = 1; m <= rows; m++) {
    let pattern = "";
    for (let n = 1; n <= m; n++) {
        pattern += "* ";
    }
    console.log(pattern);
}

//loop control statement
//1
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
}
//2
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break; 
    }
    console.log(i);
}
