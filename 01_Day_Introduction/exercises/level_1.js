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

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let CharString = challenge.charAt(15)
console.log(CharString)

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let CharStrinfFind = challenge.charCodeAt("J")
console.log(CharStrinfFind)

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let StringIndexOf = challenge.indexOf("a")
console.log(StringIndexOf)

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let LastStringA = challenge.lastIndexOf("a")
console.log(LastStringA)

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let Sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(Sentence.indexOf("because"))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(Sentence.lastIndexOf("because"))

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(Sentence.search("because"))

//se trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let ChallengeSpace = " 30 Days Of Javascript "
console.log(ChallengeSpace.trim())
