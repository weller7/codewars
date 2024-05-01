// Task
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Example:
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

    

//psedudo code



//solution
function repeatStr (n, s) {

  let arr = []
 
  for (let i=1; i<= n; i++){
    arr.push(s)
  }
  console.log(arr.join(""))

}

repeatStr (3, "*") 