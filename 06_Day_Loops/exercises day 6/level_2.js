//01- Develop a small script which generate any number of characters random id:

//fe3jo1gl124g
//xkqci4utda1lmbelpkm03rba
function exercise1(){
    let text = "";
    const possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    
    for (let i = 0; i < 6; i++){
        text += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
        
    }
    console.log(text)
    }
    exercise1()//trying

/*02- Write a script which generates a random hexadecimal number.

'#ee33df'*/
function exercise2(){
let letters = '0123456789ABCDEF';
let color = '#'
for (let i = 0; i < 6; i ++){
color += letters[Math.floor(Math.random() * 16)]}
console.log(color)
}
exercise2()

/*03- Write a script which generates a random rgb color number.
rgb(240,180,80)*/
function exercise3(){
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = console.log(`rgb(${r},${g},${b})`);
}
exercise3()
//04- Using the above countries array, create the following new array.
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
  'Kenya'
]
function exercise4(){
for(let i = 0; i < countries.length; i++){
    countries[i] = countries[i].toUpperCase();
}
console.log(countries)
}
exercise4()
//05- Using the above countries array, create an array for countries length'.

//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
function exercise5(){
let num = []
for (let i = 0; i < countries.length; i++){
    let arr = countries[i].length
    num.push(arr)
    
}
console.log(num)
}
exercise5()
/*06- Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]*/
function exercise6(){
let initials = []
let arrayOfArrays = []
for (let i = 0; i < countries.length; i++){
    let initials = countries[i].substr(0, 3).toUpperCase()
    let lengthCountries = countries[i].length
    arrayOfArrays.push([countries[i], initials, lengthCountries])
    
}
console.log(arrayOfArrays)
}
exercise6()

/*07- In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland', 'Iceland']*/
function exercise7(){
let arr = []
for (let i = 0; i < countries.length; i++){
   if(countries[i].match(/land/gi)){
       arr.push(countries[i])
   }
}
if(arr.length > 0){
    console.log(arr)
}else{
    console.log('all these countries are without land')
}
}
exercise7()
/*08- In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']*/
function exercise8(){
let arr = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].match(/ia/gi)) {
    arr.push(countries[i]);
  }
}
if (arr.length > 0) {
  console.log(arr);
} else {
  console.log('all these countries are without ia');
}
}
exercise8()

/*09- Using the above countries array, find the country containing the biggest number of characters.

Ethiopia*/
function exercise9(){
let word = [];
for(let i = 0; i < countries.length; i++){
    if(word.length < countries[i].length){
        word = countries[i] 
    }
}
console.log(word)
}
exercise9()

/*10- Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']*/
function exercise10(){
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 5) {
    console.log(countries[i]);
 }
}
}
exercise10()


//11- Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
function exercise11(){
let word = ""
for (let i = 0; i < webTechs.length; i++){
    if (word.length < webTechs[i].length){
        word = webTechs[i]
    }
}
console.log(word)
}
exercise11()

/*12- Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]*/
function exercise12(){
const arr = []
for (let i = 0; i < webTechs.length; i++){
    const result = ([webTechs[i], webTechs[i].length])
    arr.push(result)
}
console.log(arr)
}
exercise12()


//13- An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
function exercise13(){
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
for (let i = 0; i < mernStack.length; i++){
    const acronym = mernStack[i].substr(0,1)
    console.log(acronym)
}
}
exercise13()

//14- Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
function exercise14(){
for (tecnologys of webTechs){
    console.log(tecnologys)
}
}
exercise14()

//15- This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = [
    'banana',
    'orange',
    'mango',
    'lemon'
]
function exercise15(){
    let newArr = [],
        i;
    for (i = 0; i < fruits.length; i++){
      newArr.unshift(fruits[i]);
    }
  
    console.log(newArr)
}
exercise15()

//16- Print all the elements of array as shown below.
/*HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB*/
  function exercise16(){
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  for (let i = 0; i < fullStack.length; i++){
    for (let a = 0; a < fullStack[i].length; a++)
    console.log(fullStack[i][a])
  }
}
exercise16()
  

  