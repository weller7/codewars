// Task:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:

// Examples:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'


//psedudo code
//Use conditionals to check if the owner is there or other person


//solution
function greet (name, owner) {

    if (name === owner){
      return "Hello boss"
    }else {return "Hello guest"}
  
  }