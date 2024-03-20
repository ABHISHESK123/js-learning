// Task 1
function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

const string1 = "I am very good IT Developer";
console.log("Total number of vowels:", countVowels(string1));

// Task 2
function sumOfCubes() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += Math.pow(i, 3);
    }
    return sum;
}

console.log("Sum of cubes from 1 to 5:", sumOfCubes());

// Task 3
function oddPositionedChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0 && str[i] !== ' ') {
            result += str[i];
        }
    }
    console.log(result);
}

const string2 = "Soon I will be UI IT Champ"; // Changed variable name to string2

console.log("Odd positioned characters in string1:");
oddPositionedChars(string1);

console.log("Odd positioned characters in string2:");
oddPositionedChars(string2);
