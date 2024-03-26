function factorialOfNum(num) {
    if (num === null || num === undefined || isNaN(num)) {
        console.log("Invalid input. Please provide a valid number.");
        return;
    }

    if (num < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    if (num === 0) {
        console.log("Factorial of 0 is 1");
        return 1;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log("Factorial of " + num + " is " + factorial);
    return factorial;
}

// Test cases
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
