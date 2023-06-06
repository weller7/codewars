// Task:
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in
// the same way he originally typed them.


// Examples:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"


//psedudo code
//Split each word, map each word and capitalize the index 0, add the rest of the word, make it a string again with join (" ")


//solution

String.prototype.toJadenCase = function () {

    return this.split(" ").
    map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join(" ") 

}

// function toJaden() {

//     const string = "how can mirrors be real"

//     const eachWord = string.split(" ")

//     const upper = eachWord.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))
    
//     const joinedStr = upper.join(" ")

//     console.log(joinedStr)  
// }
// toJaden()