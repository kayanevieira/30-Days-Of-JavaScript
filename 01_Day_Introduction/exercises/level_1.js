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

//Check if the string contains a word Script using includes() method
console.log(challenge.includes("script"))

//Split the string into an array using split() method
let SplitString = challenge.split([])
console.log(SplitString)

//Split the string 30 Days Of JavaScript at the space using split() method
let SplitStringSpace = challenge.split([" "])
console.log(SplitStringSpace)

//Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let platforms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let array = (platforms.split(" "))
console.log(array)

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let StringReplace = challenge.replace("Javascript", "Python")
console.log(StringReplace)
