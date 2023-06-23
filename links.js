// Task:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=

//psedudo code



//solution
function removeUrlAnchor(url){
   const firstPart = url.split("#")
    console.log(firstPart[0])
}

removeUrlAnchor("www.codewars.com#about")