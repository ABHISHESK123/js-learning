// Step 1: Find the greatest number amongst two numbers
function greatestNumber(num1, num2) {
    return Math.max(num1, num2);
}

// Step 2: Check if a number is even or odd
function isEven(number) {
    return number % 2 === 0;
}

// Step 3: Check if the length of a word is even or odd
function wordLengthEvenOrOdd(word) {
    return word.length % 2 === 0 ? "Even" : "Odd";
}

// Examples
// Step 1
console.log("The greatest value amongst of 10 and 15 is:", greatestNumber(10, 15));
console.log("The greatest value amongst of 800 and 899 is:", greatestNumber(800, 899));

// Step 2
console.log("Is the given number 29 even or odd:", isEven(29));
console.log("Is the given number 44 even or odd:", isEven(44));
console.log("Is the given number 8 even or odd:", isEven(8));
console.log("Is the given number 101 even or odd:", isEven(101));

// Step 3
console.log("The word length of 'JavaScript' is:", wordLengthEvenOrOdd("JavaScript"));
console.log("The word length of 'Developer' is:", wordLengthEvenOrOdd("Developer"));
console.log("The word length of 'Google' is:", wordLengthEvenOrOdd("Google"));
