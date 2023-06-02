// Task:
// Complete the function that accepts a string parameter, and reverses 
// each word in the string. All spaces in the string should be retained.


// Examples:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//psedudo code
//Split each word, then reverse it, join it again, then split the words again and reverse them so the complete sentence is reversed.

//solution
function reverseWords(word) {
  
 return word.split("").reverse().join("").split(" ").reverse().join(" ")  
  }