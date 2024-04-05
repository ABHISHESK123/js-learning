function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function countPrimeNumbers(arr) {
    let count = 0;
    for (let num of arr) {
        if (isPrime(num)) {
            count++;
        }
    }
    return count;
}

const arr = [3, 9, 7, 6, 19, 29, 53];
console.log("%cProgram to count prime numbers in [3, 9, 7, 6, 19, 29, 53].", "color: yellow;");
console.log("%cPrime number count in array is:", "color: blue;", countPrimeNumbers(arr));

function countSpaces(string) {
    let count = 0;
    for (let char of string) {
        if (char === ' ') {
            count++;
        }
    }
    return count;
}

const string1 = "Revision is the mother of success";
const string2 = "JavaScript is the language of internet world";

console.log("%c2. Write a program to count the spaces.", "color: yellow;");
console.log("%cThe space count in string1 is:", "color: blue;", countSpaces(string1));
console.log("%cThe space count in string2 is:", "color: blue;", countSpaces(string2));
