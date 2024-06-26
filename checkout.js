// Task
// There is a queue for the self-checkout tills at the supermarket. 
// Your task is write a function to calculate the total time required for all the customers to check out!

// // Examples:
// input

//     customers: an array of positive integers representing the queue. 
//     Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output
// The function should return an integer, the total time required.

//psedudo code
//

function checkOut (arr, n){

    let time = arr.reduce((totalTime, customerTime) => {
        return totalTime += customerTime
    }, 0)

    let result = time/n
    
    console.log(result)
}
checkOut ([1,2,3,4,5], 100)

