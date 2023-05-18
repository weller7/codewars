// Task:
//Write a small function that returns the values of an array that are not odd.
//All values in the array will be integers. Return the good values in the order they are given.

//psedudo code
//Use filter to only include the values that aren't odd

//solution
function noOdds( values ){
    let even = values.filter((elem)=> elem % 2 == 0)
    console.log(even)
}

noOdds([2,3,4,5,6,7,3] )