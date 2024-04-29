// Task


// Examples:


//psedudo code

//solution
//We always return the sum no matter if the num is positive or negative. If we use an else we would be
// ending the reduction process prematurely. The purpose of the reduce function is 
//to iterate through all elements of the array and accumulate a single result. 
//By returning acc within the else block, you were stopping this iteration prematurely whenever a negative 
//or zero value was encountered.


function sumOfPos(arr){

    let sum = arr.reduce(function(acc,cur){
        if (cur>0){
            acc += cur
        }return (acc)
    },0)

    console.log(sum)

   
}

sumOfPos([1,-4,7,12])
