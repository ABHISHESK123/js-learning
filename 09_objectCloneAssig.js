// Function to display object in table format
function displayObjectInTable(obj, title) {
    console.log(`\n${title}:`);
    console.table(obj);
}

// Step 1
const bankSbi = {
    name: 'SBI Bank',
    branch: 'Main Branch',
    accountType: 'Savings',
    balance: 1000000
};
displayObjectInTable(bankSbi, 'Bank SBI');

// Step 2
const bankLocation = {
    street: '123 Main Street',
    city: 'Anytown',
    pin: '12345'
};
displayObjectInTable(bankLocation, 'Bank Location');

// Step 3
const clonedBankSbi = Object.assign({}, bankSbi);
displayObjectInTable(clonedBankSbi, 'Cloned Bank SBI');

const clonedBankLocation = Object.assign({}, bankLocation);
displayObjectInTable(clonedBankLocation, 'Cloned Bank Location');

// Step 4
const rateOfInterest = {
    homeLoanInterest: 7.5,
    personalLoanInterest: 9.8,
    autoLoanInterest: 6.2
};
displayObjectInTable(rateOfInterest, 'Rate of Interest');

// Step 5
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
displayObjectInTable(sbiDetails, 'SBI Details');

// Step 6
console.log(`\nTraversing sbiDetails:`);
for (const key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);
}
