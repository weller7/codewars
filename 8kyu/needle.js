// // Task
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:



// // Examples:
// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

//psedudo code
//



//solution
function findNeedle(haystack) {
    
    haystack.map((x,inx) => x==="needle" ? console.log(`found at ${inx}`): 0);

  }
  findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'])



  function findNeedle(haystack) {
    let inx = haystack.indexOf("needle")
    return (`found the needle at position ${inx}`)
  }