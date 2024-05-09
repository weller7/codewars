// Task
// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]


//psedudo code



//solution
function digitize(n) {

  let array

  array = String(n).split("").map(Number).reverse()
  
  console.log(array)

}
digitize(35231)
digitize(123456)