// Task
// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
// Note: the input will not be empty.

// Examples:
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

//psedudo code
//split the code when it says plus, or minus and add the sign, then convert it to a string


//solution
function calculate(str) {
    return eval(str.split("plus").join("+").split("minus").join("-")).toString();
  
  }
