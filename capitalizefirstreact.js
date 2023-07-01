// Task:
//Challenge 2:
// Given an array of strings, return an array where 
// the first letter of each string is capitalized


// Examples:
// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]


//psedudo code
//use map then to upper case and then slice the name from using 1 and no other parameter to get the rest


//solution

const cap = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(cap)