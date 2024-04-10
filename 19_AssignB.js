class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

// Create employee objects
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74880, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47008, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 48000, "Wipro");
const emp_vinay = new Employee(8, "Vinayak", "IT", 75000, "ICS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

// Store employees in an array
const arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_vinay,
    emp_mahesh
];

// 1. Find all employees working in 'TCS' and log employee names and company names
console.log("----------------------------------------- Employees working in TCS --------------------------------------------------------------------------------------------");
arrayEmployees.forEach(emp => {
    if (emp.emp_company === 'TCS') {
        console.log(`Employee Name: ${emp.emp_name}, Company: ${emp.emp_company}`);
    }
});

// 2. Find 'Finance' department employees and log department and employee names
console.log("----------------------------------------- Employees in Finance Department -----");
arrayEmployees.forEach(emp => {
    if (emp.emp_dept === 'Finance') {
        console.log(`Department: ${emp.emp_dept}, Employee Name: ${emp.emp_name}`);
    }
});

// 3. Find employees whose name starts with 'R' and log complete employee details
console.log("---------------------------------------- Employees whose name starts with 'R' ----------------------------------------------------------------------------------");
arrayEmployees.forEach(emp => {
    if (emp.emp_name.startsWith('R')) {
        console.log(emp);
    }
});

// 4. Find employees whose salary is greater than 75000 and log employee details
console.log("--------------------------------------- Employees with salary greater than 75000 --------------------------------------------");
arrayEmployees.forEach(emp => {
    if (emp.emp_salary > 75000) {
        console.log(`Employee Name: ${emp.emp_name}, Company: ${emp.emp_company}, Salary: ${emp.emp_salary}`);
    }
});

// 5. Find employees with salary >= 50000 from 'IT' department and log complete employee details
console.log("---------------------------------------- Employees from IT department with salary >= 50000 ----------------------------------");
arrayEmployees.forEach(emp => {
    if (emp.emp_dept === 'IT' && emp.emp_salary >= 50000) {
        console.log(emp);
    }
});

// 6. Find all employees from company 'Infy' and log complete employee details
console.log("----------------------------------------- Employees from Infy ---------------------------------------------------------------------------------------------------");
arrayEmployees.forEach(emp => {
    if (emp.emp_company === 'Infy') {
        console.log(emp);
    }
});
