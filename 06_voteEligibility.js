var isEligibleToVote = function(age) {
    if (age <= 0 || age > 130 || isNaN(age) || age === null) {
        console.log('Eligible for voting');
        return false;
    } else if (age < 18) {
        console.log('Not eligible for voting');
        return false;
    } else {
        console.log('Eligible for voting');
        return true;
    }
};

// Test cases
console.log(isEligibleToVote(45));   // true
console.log(isEligibleToVote(17));   // false
console.log(isEligibleToVote(8));    // false
console.log(isEligibleToVote(20));   // true
console.log(isEligibleToVote(-10));  // false
console.log(isEligibleToVote(200));  // false
console.log(isEligibleToVote(0));    // false
console.log(isEligibleToVote(null)); // false
