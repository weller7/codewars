// Task
// Write a solution to cleanup arrays. This can exist entirely in the squeakyClean
//  function or contain multiple helper functions.

// Your squeakyClean function should accept an input array of values and return a new
//  array with all empty strings, 0, null and undefined removed. 

// // Examples:
// var originalArray = ['click1','click2',null,'','','submitForm'];
// var cleanedArray = ['click1', 'click2','submitForm'] 

//psedudo code
//



//solution
function squeakyClean(arr) {
    
    let result = arr.filter(char => {
        if (char ===! ''){
            return char
        } else if (char ===! 0){
            return char
        }else if (char ===! null){
            return char
        }
        else if (char ===! undefined){
            return char
        }
        else return char
    })

    console.log(result)

  }

  squeakyClean(['hello', '14'])