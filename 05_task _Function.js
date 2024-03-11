// Function with no arguments and no return type
function greet() {
  console.log("%cHello, welcome to my program!", "color: yellow");
}

function printMessage() {
  console.log("%cThis is a sample message.", "color: cyan");
}

// Function to log personal details
function personalDetails(firstName, lastName, collegeName) {
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("College Name:", collegeName);
}

// Function to swap values
function swapValues(value1, value2) {
  console.log(
    "%cBefore swap - Value 1: " + value1 + " Value 2: " + value2,
    "color: magenta"
  );
  let temp = value1;
  value1 = value2;
  value2 = temp;
  console.log(
    "%cAfter swap - Value 1: " + value1 + " Value 2: " + value2,
    "color: magenta"
  );
}

// Function to add three values
function addThreeValues(value1, value2, value3) {
  let result = value1 + value2 + value3;
  console.log("%cThe sum of the three values is: " + result, "color: orange");
}

// Calling functions
greet();
printMessage();
personalDetails("Abhishek", "Deelip", "DYP");

// Swapping values
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

// Adding three values
addThreeValues(200, 600, 50);
addThreeValues("Hello", " Good", " Morning");

console.log("___________________________________________________");

function bankDetails(bankName, accountNum, location, pinCode) {
    console.log("Bank Name:", bankName, "Account Number:", accountNum, "Location:", location, "Pin Code:", pinCode);
}



console.log("=======Task 2=======");
// Invoking the function with different arguments
bankDetails("CITI Bank", 3456782345, 'Pune', 431202);
bankDetails("Axis Bank", 7856782345, 'Mumbai', 441202);
bankDetails("HDFC Bank", 8956782345, 'Pune', 631202);

