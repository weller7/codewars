//Example fetch using pokemonapi.co
//reate a function that returns the sum of the two lowest
//positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7

function sumTwoSmallestNumbers(arr) {

  let min1 = Math.min(...arr)

  let i = arr.indexOf(min1)

  console.log(min1)

  let removido = arr.splice(i, 1)

  let min2 = Math.min(...arr)
  let res = min1 + min2

  console.log(res)

  // console.log(arr)

  // let secondNum = arr.splice(Math.min(...arr))

  // console.log(secondNum)

  // console.log(arr)

  // let total = firstNum + secondNum

  //console.log(total)


}

sumTwoSmallestNumbers([5, 42, 2, 77])