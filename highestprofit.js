// Task

// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)

// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]


//psedudo code
//Use filter to find the lowest and highest number in the array and save them to another variable

function minMax(arr){
    const highest = Math.max(...arr)
    const lowest = Math.min(...arr)
    const arra = []
    arra.push(lowest,highest)

    console.log(arra)
  }

  minMax([1,2,3,4,5])

//solution