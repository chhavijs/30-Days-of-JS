//higher Order Function Script

function applyFunctionMultipleTimes(func, times, value) {
    let result = value;
    for (let i = 0; i < times; i++) {
        result = func(result);
    }
    return result;
}

const increment = x => x + 1;
const finalResult = applyFunctionMultipleTimes(increment, 3, 0);
console.log(`The result after applying the function 3 times is ${finalResult}.`);   