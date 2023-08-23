// Task
// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.

// Examples:


//psedudo code
//Trun the sting into an array, use map to check if it's more or less than 5 and add the number to the array using 


//solution
function fakeBin(x){

 return x.split("").map(elem => elem < 5 ? 0 : 1).join("")

}


console.log(fakeBin("12345678"))