// Class for Vehicle
class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }

    // Method to log details of the object
    logDetails() {
        console.log(`Vehicle: ${this.year} ${this.make} ${this.model}, Color: ${this.color}, Mileage: ${this.mileage} miles`);
    }
}

// Array to store vehicles
let arrayOfVehicles = [];

// Creating 5 objects of Vehicle class and adding them to arrayOfVehicles
let vehicle1 = new Vehicle('Toyota', 'Camry', 2019, 'Yellow', 20000);
let vehicle2 = new Vehicle('Honda', 'Civic', 2018, 'Yellow', 25000);
let vehicle3 = new Vehicle('Ford', 'F-150', 2020, 'Yellow', 18000);
let vehicle4 = new Vehicle('Chevrolet', 'Malibu', 2017, 'Yellow', 30000);
let vehicle5 = new Vehicle('Tesla', 'Model S', 2021, 'Yellow', 10000);

arrayOfVehicles.push(vehicle1, vehicle2, vehicle3, vehicle4, vehicle5);

// Logging details of each vehicle in arrayOfVehicles
console.log("Details of Vehicles:");
arrayOfVehicles.forEach((vehicle, index) => {
    console.log(`Vehicle ${index + 1}:`);
    vehicle.logDetails();
});

// Class for College
class College {
    constructor(name, location, foundedYear, totalStudents) {
        this.name = name;
        this.location = location;
        this.foundedYear = foundedYear;
        this.totalStudents = totalStudents;
    }

    // Method to log complete object details
    display() {
        console.log(`College Name: ${this.name}, Location: ${this.location}, Founded Year: ${this.foundedYear}, Total Students: ${this.totalStudents}`);
    }
}

// Creating 4 objects of College class and invoking display method for each
let college1 = new College('Harvard University', 'Cambridge, MA', 1636, 21000);
let college2 = new College('Stanford University', 'Stanford, CA', 1885, 17000);
let college3 = new College('Massachusetts Institute of Technology (MIT)', 'Cambridge, MA', 1861, 11500);
let college4 = new College('California Institute of Technology (Caltech)', 'Pasadena, CA', 1891, 2300);

console.log("\nDetails of Colleges:");
college1.display();
college2.display();
college3.display();
college4.display();
