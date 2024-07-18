// Factorial Calculation Script

function calculateFactorial(num) {
    let factorial = 1;
    let i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= num);

    console.log(`The factorial of ${num} is:`, factorial);
}

calculateFactorial(8);
