// Task:
// Create a function that returns the sum of the two lowest positive numbers 
// given an array of minimum 4 positive integers. No floats or non-positive 
// integers will be passed.


// Examples:
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.


//psedudo code
//find the lowesr add it to a variable and remove it, then find the 2nd lowest.

//solution
function sumTwoSmallestNumbers(arr) {  

    let min1 = Math.min(...arr)
  
    let i = arr.indexOf(min1)
  
  
    let removido = arr.splice(i, 1)
  
    let min2 = Math.min(...arr)
    let res = min1 + min2
  
    return(res)
  }