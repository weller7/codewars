// Task
//Check to see if a string has the same amount of 'x's and 'o's. The method must return 
//a boolean and be case insensitive. The string can contain any char.


// Examples:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//psedudo code
//



//solution
function XO(str) {

    return str = str.toLowerCase(), str.split("o").length == str.split("x").length
}


XO("xXXooo")