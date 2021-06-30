//02- First remove all the punctuations and change the string to array and count the number of words in the array
/*let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]*/
function exercise2(){
const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const forbbidenChars = /[.,]/gi
let clearSentence = text.replace(forbbidenChars, '')
const arr = clearSentence.split(' ')
console.log(arr.length)
}
exercise2()

/*03- In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/
function exercise3(){
let shoppingCart = ['Milk','Coffee','Tea','Honey']

const addBeginning = shoppingCart.unshift('Meat')
const addEnd = shoppingCart.push('Sugar')
const alergicToHoney = true

if (alergicToHoney == true){
    shoppingCart.splice(4, 1)
    console.log(shoppingCart)
}else{
    console.log(shoppingCart)
}

shoppingCart.splice(3, 1, "Green Tea")
console.log(shoppingCart)
}
exercise3()
//04- In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

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
  const findIfExist = countries.includes('Ethiopia')
  
if (findIfExist == true){
    console.log('ETHIOPIA')
}else{
    countries.push('Ethiopia')
}
}
exercise4()

//05- In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
function exercise5(){

const findIfExist = webTechs.includes('Sass')

if (findIfExist == true){
    console.log('Sass is a CSS preprocess')
}else{
    webTechs.push('Sass')
    console.log(webTechs)
}
}
exercise5()

//06- Concatenate the following two variables and store it in a fullStack variable.

/*const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)*/
function exercise6(){
let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
let backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
}
exercise6()