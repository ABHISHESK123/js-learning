// 1. Arrow function with no args and no return value
const greetMorning = () => {
    console.log("Good Morning, Today is Monday");
};

// 2. Arrow function with 3 args and no return value (performing multiplication)
const multiplyValues = (a, b, c = 1) => {
    const result = a * b * c;
    console.log(`Multiplication result: ${result}`);
};

// 3. Arrow function with 5 args and return value (performing addition)
const sumValues = (a, b, c, d, e) => {
    const sum = a + b + c + d + e;
    return sum;
};

// Test the functions with specified values
// For function 1
console.log("----- Function 1 -----");
greetMorning();

// For function 2
console.log("----- Function 2 -----");
multiplyValues(5, 5, 2); // Output: Multiplication result: 50
multiplyValues(10, 4);    // Output: Multiplication result: 40 (default c = 1)

// For function 3
console.log("----- Function 3 -----");
const sumResult1 = sumValues(100, 100, 200, 349, 756);
console.log(`Sum result for values: ${sumResult1}`); // Output: Sum result for values: 1505

// Invoke function 3 with string arguments
const sumResult2 = sumValues("I am", "learning", "ES6", "features", " in depth");
console.log(`Sum result for strings: ${sumResult2}`); // Output: Sum result for strings: I amlearningES6features in depth
