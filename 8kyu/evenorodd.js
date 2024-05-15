// Task
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


// Examples:


//psedudo code
//Check for both cases if flower 1 is odd and if flower 1 is even and retun false if those arent met



//solution
function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0 ){
        console.log("Love")
    }else if (flower1 % 2 !== 0 && flower2 % 2 === 0){
        console.log("Love")
    }else {console.log("Not Love")}
  }

  lovefunc(0,0)