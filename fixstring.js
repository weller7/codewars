// Task
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


// Examples:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

//psedudo code
//Check every letter to see if there are more lowe or uppercase
//if more lowercase change the ones that are upper to lower
//if more upper change the ones that are lower to upper
//if equal change to lower
//print result



//solution

   

function solve(s){
        let lowerC = 0;
        let upperC = 0;
        for( let i = 0;i<s.length;i++){
          if( s[i] == s[i].toUpperCase()){
            upperC++;
          }
          else{
            lowerC++;
          }
        }
        return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
    }

   changeLetters ("oMiNis")


