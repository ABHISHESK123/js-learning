const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

// 1. Find the total elements available or length and log on console
console.log("Total elements:", arrayNumbers.length);

// 2. Log the first element and last element in arrayNumbers and log on console
console.log("First element:", arrayNumbers[0]);
console.log("Last element:", arrayNumbers[arrayNumbers.length - 1]);

// 3. Log the third last element using length property and log on console
console.log("Third last element:", arrayNumbers[arrayNumbers.length - 3]);

// 4. Find all the even numbers using for of loop and log on console
console.log("Even numbers:");
for (const num of arrayNumbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}

// 5. Find the odd numbers for of loop and log on console
console.log("Odd numbers:");
for (const num of arrayNumbers) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}

// 6. Find all the even positioned elements from arrayNumbers, sum it and log on console
let evenPositionSum = 0;
for (let i = 1; i < arrayNumbers.length; i += 2) {
    evenPositionSum += arrayNumbers[i];
}
console.log("Sum of even positioned elements:", evenPositionSum);

// 7. Find all the odd positioned elements from arrayNumbers, sum it and log on console
let oddPositionSum = 0;
for (let i = 0; i < arrayNumbers.length; i += 2) {
    oddPositionSum += arrayNumbers[i];
}
console.log("Sum of odd positioned elements:", oddPositionSum);

// 8. Find the sum of all elements from arrayNumbers, log on console
const sum = arrayNumbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all elements:", sum);

// 9. Find the numbers which are multiple of 5
const multiplesOf5 = arrayNumbers.filter(num => num % 5 === 0);
console.log("Numbers which are multiples of 5:", multiplesOf5);

// 10. Is number 115 available in arrayNumbers?
console.log("Is number 115 available?", arrayNumbers.includes(115));

// 11. Is number 23 available in arrayNumbers?
console.log("Is number 23 available?", arrayNumbers.includes(23));

// 12. Insert numbers 55, 66 at index 3 and log array on console
arrayNumbers.splice(3, 0, 55, 66);
console.log("Array after inserting numbers 55 and 66 at index 3:", arrayNumbers);

// 13. Delete 3 elements starting from index 4 and log arrayNumbers on console
arrayNumbers.splice(4, 3);
console.log("Array after deleting 3 elements starting from index 4:", arrayNumbers);
