// Task:
// given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Examples:
// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);

//psedudo code
//Convert the string to array using split, 


//solution
function findShort(s){
   let arr = s.split(" ")

   let short= arr.reduce((word1, word2) => 
    (word1.length <= word2.length ? word1 : word2))

    console.log(short.length)
   
}

function findShort(s){
    let arr = s.split(" ")
 
    let short= arr.reduce((word1, word2) => 
     (word1.length <= word2.length ? word1 : word2))
 
     return short.length
    
 }
findShort("Ominis is the best")