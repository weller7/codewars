// Task:
// In this kata you will create a function that takes a list
//  of non-negative integers and strings and returns a new list 
// with the strings filtered out.


// Examples:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//psedudo code
//Use filter to identify the elements that arent a string and only include them in the new array


//solution
function filter_list(l) {
  
 return l.filter(function(element){return typeof element != "string"})    
    
}