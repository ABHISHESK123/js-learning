const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

// ANSI escape codes for color formatting
const redColor = "\x1b[31m"; // Red color
const resetColor = "\x1b[0m"; // Reset color

// 1. Add 10 to each element and log the new array result on console
console.log(`${redColor}Before adding 10 to each element [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];${resetColor}`);
const newArray1 = arrayNumbers.map(num => num + 10);
console.log("Array after adding 10 to each element:", newArray1);

// 2. Cube each array element and log on console
console.log(`${redColor}Before cubing each element [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];${resetColor}`);
const newArray2 = arrayNumbers.map(num => num ** 3); // Using ** for cube
console.log("Array after cubing each element:", newArray2);

// 3. Add the index value to each corresponding array element and log the new array result on console
console.log(`${redColor}Before adding index to each element [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];${resetColor}`);
const newArray3 = arrayNumbers.map((num, index) => num + index);
console.log("Array after adding index to each element:", newArray3);
