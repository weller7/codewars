// Task:
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.


// Examples:
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.

//psedudo code
//use map to iterate the array and multipy each num by 1

//solution
function toNumberArray(stringarray){
      let num = stringarray.map(elem => elem *1)
    return num
  }