/*01- Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.*/

//02- Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator(){
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = console.log(`rgb(${r},${g},${b})`);
return rgb
}
rgbColorGenerator()

//03- Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
let arr = []
function arrayOfHexaColors(){
const letters = '0123456789ABCDEF';
let hexaNumber = '#'
    for (let i = 0; i < 6; i ++){
        hexaNumber += letters[Math.floor(Math.random() * 16)]}
        arr.push(hexaNumber)
return arr
}
console.log(arrayOfHexaColors())

//04- Write a function arrayOfRgbColors which return any number of RGB colors in an array.
let arrRgb = []
function arrayOfRgbColors(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    let rgb = (`rgb(${r},${g},${b})`);
    arrRgb.push(rgb)
    return arrRgb
}
console.log(arrayOfRgbColors())

//05- Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(){
    const letters = '0123456789ABCDEF';
    let hexaNumber = '#'
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`

    for (let i = 0; i < 6; i ++){
    hexaNumber += letters[Math.floor(Math.random() * 16)]
    hexaNumber = rgb
}
console.log(hexaNumber)
}
convertHexaToRgb()

//06- Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(){
    const letters = '0123456789ABCDEF';
    let hexaNumber = '#'
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    let rgb = `rgb(${r},${g},${b})`

    for (let i = 0; i < 6; i ++){
    hexaNumber += letters[Math.floor(Math.random() * 16)]
    rgb = hexaNumber
}
console.log(rgb)
}
convertRgbToHexa()

//07- Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(hexa,number){
    const letters = '0123456789ABCDEF';
    let hexaNumber = '#'
    let retorno = []
    let anyt;
    for (let i = 0; i < number; i++){
        if(hexa == 'hexa'){
            for (let i = 0; i < 6; i++){
              anyt = hexaNumber + letters[Math.floor(Math.random() * 16)]} 
         }
         retorno.push(anyt)
        }
    return retorno
}
//trying
console.log(generateColors('hexa', 3))

//08- Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array){
array = array.sort(() => Math.random() - 0.5)
console.log(array)
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
shuffleArray(array)

//09- Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num){
    if(num < 0){
        return -1
    }else if(num === 0){
        return 1
    }else{
        return (num * factorial(num - 1))
    }
}
console.log(factorial(5))

//10- Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(string){
    if(string !== ''){
    console.log('not empty')
}else{
    console.log('empty')
}
}

isEmpty('')

//11- Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args){
    let sum = 0
    for(let i = 0; i < args.length; i++){
        sum = sum + args[i]
    }
    return sum
}
console.log(sum(1, 2))