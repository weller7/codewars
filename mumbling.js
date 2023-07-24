// Task
// This time no story, no theory. The examples below show you how to write function accum:


// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//psedudo code
//separate each letter, add a -, have a counter that adds 1 to the next set of letters

//solution
// function accum(s) {
// 	let spl = s.split("")
    

//     console.log(spl)

//     let arr = spl.map((elem, ind) => {
//         //`${elem}- ${ind+1}`
//         console.log (elem.repeat(ind+1))

//     })


// }



const accum =s =>

    s.toLowerCase().split("").map((elem,ind)=>
                                                elem.toUpperCase() + elem.repeat(ind)).join("-")


function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}