// Task:
// Given an array of integers, remove the smallest value. Do not mutate the original 
//array/list. If there are multiple elements with the same value, remove the one with
// a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left

// // Examples:
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


//psedudo code
//use index of and math min to find the index of the smallest element
//slice the array on that index and slice it again to add the rest of the elements and use ... to concatenate them

//solution
// function removeSmallest(arr) {
//     let minNum = Math.min(...arr)
//     let index = arr.indexOf(minNum)
//     console.log(minNum, index)

//     arr.splice(index,1)
//     console.log(arr)
// }

function removeSmallest(arr) {
    let index = arr.indexOf(Math.min(...arr))

    return[ ...arr.slice(0, index), ...arr.slice(index+1)]
}


  removeSmallest( [1,2,3,4,5])