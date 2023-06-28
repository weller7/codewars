// Task:
// Given a string str, reverse it and omit all non-alphabetic characters.
// Example


// Examples:
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

//psedudo code


//solution
function reverseLetter(str) {
  let reverse =  str.split("")
                                .reverse()
                                .filter(elem=>/[a-zA-Z]/.test(elem))
                                .join("")
    
  return((reverse))
    
}


reverseLetter("ultr53o?n")