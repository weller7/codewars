// // Task
// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.


// // Examples:
// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

// //psedudo code




//solution
const lengthOfSequence = (arr,n) => {
    const count = arr.filter (val => val === n)

    if (count.length !== 2) return 0
    if (count.length ===2) return 2

    return arr.lastIndexOf(n) - arr.lastIndexOf(n)+1

}