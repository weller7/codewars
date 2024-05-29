// Task
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match 
// is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.



// We need to write a function that takes this collection and returns the number of points our 
// team (x) got in the championship by the rules given above.

// // Examples:
// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

//psedudo code
//



//solution
function points(games) {
    
    return games.reduce((sum, game) => {
        const scores = [game[0],game[2]]

        if(scores[0]>scores[1]){
            return sum + 3 
        }else if (scores[0]===scores[1]) {
            return sum +1
        }else {return sum}
    },0)
    
  }



  points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])