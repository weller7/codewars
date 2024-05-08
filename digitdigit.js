// Task:
// In this kata, you are asked to square every digit of a number and concatenate them.


// Examples:
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.


//psedudo code
//convert the num to String, then split each num to make it an array, then use map to square each numb
//then convert the num to string again, split it and join it to concatenate it and convert it to string


//solution
function squareDigits(num){

   let arr = num.toString().split("")

   let square = arr.map(element => element ** 2)

   console.log(square)

   let concat = square.toString().split(",").join("")
   console.log(Number(concat))
}

// function squareDigits(num){

//     let arr = num.toString().split("")
 
//     let square = arr.map(element => element ** 2)
 
//     let concat = square.toString().split(",").join("")
    
//     Number(concat)
//  }


squareDigits(765)
