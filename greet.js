// Task


// Examples:


//psedudo code
//



//solution
var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
  };


  var greet = function(name) {
    return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
  };

greet("ominis")