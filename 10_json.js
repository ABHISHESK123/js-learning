// Define the 'person' object
let person = {
    name: "Abhishek",
    city: "Pune",
    experience: 10,
    isMarried: true,
    skills: ["HTML", "CSS", "Javascript"],
    address: {
        street: "Wakad",
        city: "Pune"
    }
};



// Log the "HTML" skill from the skills array
console.log("Skills of the person:");
person.skills.forEach(skill => {
    if (skill === "HTML") {
        console.log(skill);
    }
});






// Output the type of 'person' (should be 'object')
console.log(`type of person is: ${typeof person}`);

// Convert 'person' object to JSON string
const personJSON = JSON.stringify(person);

// Output the type of 'personJSON' (should be 'string')
console.log(`typeof personJSON: ${typeof personJSON}`);

// Output the JSON-formatted string
console.log(personJSON);

console.log('=====================Convert JSON TO Object=======================');

// Parse the JSON string back to an object
const personObject = JSON.parse(personJSON);

// Output the type of 'personObject' (should be 'object')
console.log(`typeof personObject: ${typeof personObject}`);

// Output the parsed object
console.log(personObject);



console.log("Name:", person.name);
console.log("City:", person.city);
console.log("Experience:", person.experience);