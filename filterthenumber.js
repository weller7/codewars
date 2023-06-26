// Task:
// Filter the number

// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, 
//can you return the number back to its original state?
// Task

// Your task is to return a number from a string.
// Details

// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.


// Examples:
//assert.strictEqual(filterString("a1b2c3"), 123

//psedudo code
//split the string, check if it is a number and return it


//solution
let filterString = function(value) {
   let split = value.split("")
    //console.log(split)


    split.map((elem) => !isNaN(parseFloat(elem)) && isFinite(elem).join(""))
        //console.log(elem)
  
}
filterString ("a1b2c3")


//solution
const FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }


