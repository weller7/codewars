// Task:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples

// Examples:
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12


//psedudo code
//check if the number is less than 0 if it is mutiply it by -1 and if it isn't return the number


//solution
function makeNegative(num) {

    return num > 0 ? num * -1 : num 
  
  }