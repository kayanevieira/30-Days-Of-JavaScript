//01- Copy countries array(Avoid mutation)
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

//02- Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries.
function exercise2(){
const sortedCountries = countries.sort()
console.log(sortedCountries)
}
exercise2()
//03- Sort the webTechs array and mernStack array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

console.log(webTechs.sort())
console.log(mernStack.sort())

//04- Extract all the countries contain the word 'land' from the countries array and print it as array
function exercise4(){
let arr = []
for (let i = 0; i < countries.length; i++){
   if(countries[i].match(/land/gi)){
       arr.push(countries[i])
   }
}
console.log(arr)
}
exercise4()

//05- Find the country containing the hightest number of characters in the countries array
function exercise5(){
let numberMaxOfChar = ""
for(let i = 0; i < countries.length; i++){
    if(numberMaxOfChar.length < countries[i].length){
        numberMaxOfChar = countries[i]
    }
}
console.log(numberMaxOfChar)
}
exercise5()
//06- the same as exercise 4

//07- Extract all the countries containing only four characters from the countries array and print it as array
function exercise7(){
for (let i = 0; i < countries.length; i++){
    if (countries[i].length == 4){
    console.log(countries[i])
}
  }
}
exercise7()

//08- Extract all the countries containing two or more words from the countries array and print it as array
function exercise9(){
let arr = []
for (let i = 0; i < countries.length; i++){
    if(countries[i].includes(' ')){
        arr.push(countries[i])
    }
}
}
exercise9()
//09- Reverse the countries array and capitalize each country and stored it as an array
const newArray = (countries.reverse())
console.log(newArray)