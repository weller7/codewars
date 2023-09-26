// Task
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples:
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


//psedudo code
//use a loop to count from a to b and add a var that holds that num and add the next


//solution

function sum (a,b){
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    let total = 0

    for (let i=min; i<=max; i++){
        total += i
    }

    console.log(total)
}

sum (0,-1)