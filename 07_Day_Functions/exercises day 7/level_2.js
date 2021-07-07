//01- Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


//02- Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
  let raiz1, raiz2;
  let bhaskaraDescr = b * b - 4 * a * c;
  if (bhaskaraDescr > 0) {
    raiz1 = -b + Math.sqrt(bhaskaraDescr) / (2 * a);
    raiz2 = -b - Math.sqrt(bhaskaraDescr) / (2 * a);
    console.log(`as raizes quadraticas são ${raiz1} e ${raiz2}`);
  } else if (bhaskaraDescr == 0) {
    raiz1 = raiz2 = -b / (2 * a);
    console.log(`as raizes quadraticas são ${raiz1} e ${raiz2}`);
  }
}
solveQuadratic(1, 4, 4)

//03- Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
      result =  console.log(arr[i])
    }
    return result
}
const array = [1,2,3,4,5]
printArray(array)

//04- Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    const now = new Date()
    const year = now.getFullYear() 
    const month = now.getMonth() 
    const date = now.getDate() 
    const hours = now.getHours() 
    const minutes = now.getMinutes() 
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
}
showDateTime()

//05- Declare a function name swapValues. This function swaps value of x to y.

//swapValues(3, 4) // x => 4, y=>3
//swapValues(4, 5) // x = 5, y = 4
function swapValues(x, y){
  return [y, x]
}
console.log(swapValues(3,4))

//06- Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
let reversedArr = [];  
function reverseArray(arr){    
    for (var i = arr.length - 1; i >= 0; i--){         
    let reversed = arr[i]; 
    reversed = + reversed
    reversedArr.push(reversed)
}
return reversedArr
}
let arrayOfReverse = [1,2,3]
console.log(reverseArray(arrayOfReverse))

//07- Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let capitalizearray = []
function capitalizeArray(arr){
    for(let i = 0; i < arr.length; i++){
        const toUpperCase = (arr[i].toUpperCase())
        capitalizearray.push(toUpperCase)
    }
    return capitalizearray
}
console.log(capitalizeArray(['kay','vieira']))

//08- Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let arrayItemAdd = []

function addItem(item){
    arrayItemAdd.push(item)
    return arrayItemAdd
}
console.log(addItem('banana'))

//09- Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let arrayItemRemove = ['laranja', 'bergamota', 'banana']

function removeItem(index){
    arrayItemRemove.shift(index)
    return arrayItemRemove
}
console.log(removeItem())

//10- Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (...args) => {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
      sum += args[i]
    }
    return sum
  }
console.log(sumOfNumbers(1, 6))
  //11- Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
  function sumOfOdds(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      if (args[i] % 2 !== 0) {
        sum = sum + args[i];
      }
    }
    return sum;
  }
  console.log(sumOfOdds(1, 2, 3, 5));

  //12- Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
  function sumOfEven(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      if (args[i] % 2 == 0) {
        sum = sum + args[i];
      }
    }
    return sum;
  }
  console.log(sumOfEven(1, 2, 3, 5));

  //13- Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

//evensAndOdds(100);
//The number of odds are 50.
//he number of evens are 51.


//14- Write a function which takes any number of arguments and return the sum of the arguments
function sumOfAnyNumbers(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
      sum = sum + args[i];
  }
  return sum;
}
console.log(sumOfAnyNumbers(1, 2, 3, 5));

//15- Writ a function which generates a randomUserIp.
function randomUserIp(){
  const randomNumber = Math.floor(Math.random() * 10 + 1)
  let Ip = "";
  const possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  
  for (let i = 0; i < randomNumber; i++){
      Ip += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
      
  }
  console.log(Ip)
  }
randomUserIp()

//16- Write a function which generates a randomMacAddress
function randomMacAddress(){
  const hexDigits = "0123456789ABCDEF";
  let macAddress = "";
  for (var i = 0; i < 6; i++) {
      macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
      macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
      if (i != 5) macAddress += ":";
  }

  return macAddress;
}
console.log(randomMacAddress())

//17- Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator(){
  const letters = '0123456789ABCDEF';
  let hexaNumber = '#'
  for (let i = 0; i < 6; i ++){
  hexaNumber += letters[Math.floor(Math.random() * 16)]}
  return hexaNumber
  }
 console.log(randomHexaNumberGenerator())

 //18- Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
 function userIdGenerator(){
   let id = ''
   const possibleChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for(let i = 0; i < 7; i++){
    id += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
  }
  return id 
 }
 console.log(userIdGenerator())
  