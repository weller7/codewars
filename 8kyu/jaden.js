// Task
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are 
// actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real


//psedudo code
//make the string an array, uppercase the [0], convert to strin again


//solution
function toJadenCase (str) {

  let arr = str.split("")
  

  arr.map(str => str.charAt(0).toUppercase() + str.slice(1)).join(" ")

  console.log(arr)
    
  }

  toJadenCase ("partners in crime")