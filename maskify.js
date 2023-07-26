// Task
// Usually when you buy something, you're asked whether your credit card number, phone number or answer 
// to your most secret question is still correct. However, since someone could look over your shoulder, you
//  don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples:
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""


//psedudo code
//check how long the string is, if it is 4 or less char print it, if more than 4 divide it and convert the rest
// to #

//solution

    function maskify(cc) {
        cc = cc.split("");
        for(var i = 0; i < cc.length - 4; i++){
          cc[i] = "#";
      }
      
      cc = cc.join("");
      console.log( cc)
      }




maskify("aaaaaaa")