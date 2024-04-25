// Task .
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between

// Examples:
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


//psedudo code
//



//solution
function list (arr) {
    arr.map((elem,index) => console.log(`${index+1} ${elem}`))
}

let number = function list (arr) {
    return arr.map((elem,index) => { return (`${index+1}: ${elem}`)}
)}

list (["a", "b", "c"])
