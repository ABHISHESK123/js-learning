console.log("1. Print numbers from 5 to 15 by incrementing 1:");
for (let i = 5; i <= 15; i++) {
    console.log(i);
}

console.log("\n2. Print numbers from 50 to 40 by decrementing 1:");
for (let i = 50; i >= 40; i--) {
    console.log(i);
}

console.log("\n3. Find first 15 odd numbers:");
for (let i = 1, count = 0; count < 15; i += 2) {
    console.log(i);
    count++;
}

console.log("\n4. Find first 10 even numbers:");
for (let i = 2, count = 0; count < 10; i += 2) {
    console.log(i);
    count++;
}

console.log("\n5. Print table of 5:");
for (let i = 1; i <= 10; i++) {
    console.log(i * 5);
}

console.log("\n6. Print table of 10 up to 100:");
for (let i = 1; i <= 10; i++) {
    console.log(i * 10);
}

console.log("\n7. Print table of 10 in reverse order up to 100:");
for (let i = 10; i >= 1; i--) {
    console.log(i * 10);
}
