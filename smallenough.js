// Task:
// You will be given an array and a limit value. You must check that all 
// values in the array are below or equal to the limit value. If they are, 
// return true. Else, return false.

// You can assume all values in the array are numbers.


// Examples:
// assert.strictEqual(smallEnough([66, 101], 200), true);
// assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);

//psedudo code
//Use map to chech if evey element is below the given number


//solution
    
const smallEnough = (a, limit) => a.every((number) => number <= limit)

