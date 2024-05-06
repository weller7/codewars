// Task
// rolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls'
// comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.


// Examples:
// "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


//psedudo code
//split the word so it becomes an array ("") 
//check every element of the arr an see if there's a vowel
//filter the vowels using .includes
//join the remaining letter so it becomes a string again


//solution
function disemvowel(str) {

    let word = str.split("")
    let result= word.filter( (letter) => ( !(["a", "e", "i", "o", "u"].includes(letter.toLowerCase()))) )
    result = result.join("")

    //console.log(word)
    console.log(result)


  }
  disemvowel ("This website is for losers LOL!")