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
function abbrevName(name){

  let arr = name.split(" ")
  console.log(arr)
  console.log(`${arr[0][0]}.${arr[1][0]}`.toUpperCase())

}
abbrevName("ominis Gaunt")
abbrevName("jamie o'hare")
abbrevName("alex o´hare")