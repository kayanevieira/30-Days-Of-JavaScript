// 01- Using console.log() print out the following statement:
console.log('\'There is no exercise better for the heart than reaching down and lifting people up.\'')

// 02- Using console.log() print out the following quote by Mother Teresa:
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

// 03- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
if (typeof '10' == 10){
    console.log("true")
}else{
    console.log(typeof Number('10'), 'equal now')
}

// 04-Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
//let floatVar = parseFloat('9.8')
let number = '9.8';

if (parseFloat(number) !== 10) {
   console.log(number = 10);
}else{
    console.log('not equal')
}

// 05-Check if 'on' is found in both python and jargon
let wordsTofind = 'python jargon'
if (wordsTofind.includes('on')) {
    console.log('it contains')
}else{
    console.log('it doens\'t contains')
}

// 06- hope this course is not full of jargon. Check if jargon is in the sentence.
const sentence = 'hope this course is not full of jargon.'
if (sentence.includes('jargon')){
    console.log('contains')
}else{
    console.log('it doens\'t contains')
}
// 07- Generate a random number between 0 and 100 inclusively
console.log(Math.floor(Math.random() * 100))

// 08 - Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * (100 - 50 + 1) + 50));

// 09- Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255))

// 10- Access the 'JavaScript' string characters using a random number.
const string = 'JavaScript';
let randomNumber = Math.floor(Math.random() * string.length)

function generateLetter (){
     return string.charAt(randomNumber)

}

console.log(randomNumber,' = ', generateLetter())

// 11-Use console.log() and escape characters to print the following pattern.
    //1 1 1 1 1
    //2 1 2 4 8
    //3 1 3 9 27
    //4 1 4 16 64
    //5 1 5 25 125

console.log('\n 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125');

