//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = "30 Days of Javascript"

//Print the string on the browser console using console.log()
console.log(challenge)

//Print the length of the string on the browser console using console.log()
console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
var BiggerString = challenge.toUpperCase()
console.log(BiggerString)

//Change all the string characters to lowercase letters using toLowerCase() method
let ShorterString = challenge.toLowerCase()
console.log(ShorterString)

//Cut (slice) out the first word of the string using substr() or substring() method
let SliceString = challenge.substr(1)
console.log(SliceString)

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let SlicePhrase = challenge.substr(2)
console.log(SlicePhrase)
