// Task:
// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. 
// He wants to replace all the rotten pieces of fruit with fresh ones. 
//  Your task is to implement a method that accepts an array of strings containing fruits should returns
//   an array of strings where all the rotten fruits are replaced by good ones.

//   Notes

//     If the array is null/nil/None or empty you should return empty array ([]).
//     The rotten fruit name will be in this camelcase (rottenFruit).
//     The returned array should be in lowercase.


// Examples:
//For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"].


//psedudo code
//Use map and if the string containsrotten split roten and add the rest to the array

//solution
function removeRotten(bagOfFruits) {
    
 let goodFruits = []
   
 bagOfFruits.map(elem => {
   
    if(elem.includes("rotten")){
         let splitText = elem.split("rotten")
         console.log(splitText[1])

         goodFruits.push(splitText[1].toLowerCase())
       
        }else {goodFruits.push(elem)}
    
  })
  console.log(goodFruits)
}


function removeRotten(bagOfFruits) {
    
    let goodFruits = []

    if (bagOfFruits == []){
        return []
    }
      
    bagOfFruits.map(elem => {
      
       if(elem.includes("rotten")){
            let splitText = elem.split("rotten")
   
            goodFruits.push(splitText[1].toLowerCase())

        } else {goodFruits.push(elem)}
       
     })
     return(goodFruits)
   }
   


  removeRotten(["apple","rottenBanana","apple"] ) 