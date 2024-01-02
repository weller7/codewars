// Task
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') 
// Don't count zero as an odd digit

// Note that the number will always be non-negative (>= 0)


// Examples:
// if num is 454793 the output should be 4547-9-3.

//psedudo code
//split the string, then use map to check if the number is negative, if it is use slice to add the -



//solution


function dash (nums){
    let arr = nums.toString().split("")
    console.log (arr)

    arr.map(num => {
        if (!num % 2 == 0){
             arr.push("-")
        }else{return num}
    })
    console.log(arr)

}


function insertDash(num) {
    const arr = String(num).split('').map(Number);
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] % 2 && arr[i + 1] % 2) {
         result.push(arr[i], '-') 
       } else {
         result.push(arr[i])
       }
    }
     return result.join('');
  }

insertDash(01234)
