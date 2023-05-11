// Task:
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). 
// Use the filter functionality to complete the function given.


// Examples:
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


//psedudo code
//Use filter and then check if each number is even or odd


//solution
function getEvenNumbers(array){
    let odd = array.filter(element => element % 2 == 0) 
    console.log(odd)
  }


  getEvenNumbers([1,2,3,6,8,10])