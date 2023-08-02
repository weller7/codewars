// Task
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b 
// (change a to b and vice versa). Leave any incidence of c untouched.


// Examples:
// acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//psedudo code
const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('')

console.log(switcheroo("abaacc"))

//solution
