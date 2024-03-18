// File: 06_grade.js

function gradeCalculation(marks) {
    if (marks >= 90) {
        console.log(`Funtastic marks: ${marks}, Your grade is A+`);
    } else if (marks >= 75 && marks < 90) {
        console.log(`Excellent marks ${marks}, your grade is A`);
    } else if (marks >= 50 && marks < 75) {
        console.log(`Good marks ${marks}, your grade is B`);
    } else if (marks >= 35 && marks < 50) {
        console.log(`Marks is ${marks}, your grade is C, Need improvement`);
    } else {
        console.log("Please provide the valid marks");
    }
    console.log("___________________________");
}

// Invoking function for values
gradeCalculation(98); console.log("___________________________");
gradeCalculation(80); console.log("___________________________");
gradeCalculation(90); console.log("___________________________");
gradeCalculation(0); console.log("___________________________");
gradeCalculation(150); console.log("___________________________");
gradeCalculation(-7); console.log("___________________________");
gradeCalculation(35); console.log("___________________________");
gradeCalculation(29); console.log("___________________________");
gradeCalculation(64); console.log("___________________________");
gradeCalculation(49); console.log("___________________________");
gradeCalculation("91"); console.log("___________________________");
gradeCalculation("Eighty"); console.log("___________________________");
gradeCalculation(undefined); console.log("___________________________");
gradeCalculation(null); console.log("___________________________");
