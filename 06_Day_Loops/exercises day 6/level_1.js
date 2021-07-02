//01- Iterate 0 to 10 using for loop, do the same using while and do while loop
function one(){
for (let i = 0; i <= 10; i++){
    console.log(i)
}
    }
one()

function two(){
let i = 0
while(i <= 10){
    console.log(i)
    i++
}
}
two()

function three(){
let i = 0
do{
    console.log(i)
    i++
}while(i <= 10)
}
three()

//02- Iterate 10 to 0 using for loop, do the same using while and do while loop
function exercise1(){
for (let i = 10; i >= 0; i--){
    console.log(i)
}
}
exercise1()

function exercise2(){
let i = 10
    while(i >= 0){
        console.log(i)
        i--
    }
}
exercise2()

function exercise3(){
    let i = 10
    do{
        console.log(i)
        i--
    }while(i >= 0)
}
exercise3()

//03- Iterate 0 to n using for loop

/*04- Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######*/
function exercise4(){
for (let i = 1; i <= 7; i++){
    console.log("#".repeat(i))
}
}
exercise4()

/*05- Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/
function exercise5(){
for (let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
}
exercise5()
/*06- Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000*/
function exercise6(){
 for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${Math.pow(i, 2)}  ${Math.pow(i, 3)}`)
  }
}
exercise6()
  //07- Use for loop to iterate from 0 to 100 and print only even numbers
  function exercise07(){
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
}

  //08- Use for loop to iterate from 0 to 100 and print only odd numbers
  for (let i = 0; i <= 100; i++){
      if(i++ % 3 !== 0){
        console.log(i)
      }
  }

  //09- Use for loop to iterate from 0 to 100 and print only prime numbers
function isPrime(num) {
    if(num < 2) return false;
    for (let i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}
    for(let i = 0; i < 100; i++){
        if(isPrime(i)) console.log(i);
}
isPrime()

//10- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
function exercise10(){
let sum = 0
for (let i = 0; i <= 100; i++){
   console.log(sum = sum + i)
}
}
exercise10()

//11- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
function exercise11(){
let sum = 0
let total = 0

for (let i = 0; i <= 100; i += 2) {
    console.log(sum = sum + i);
  }

  for (let i = 0; i <= 100; i++){
    if(i++ % 3 !== 0){
      console.log(total = total + i)
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sum}`)
console.log(`The sum of all odds is ${total}`)
}
exercise11()

//12- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
function exercise12(){
    let sum = 0
    let total = 0
    
    for (let i = 0; i <= 100; i += 2) {
        console.log(sum += i);
      }
    
      for (let i = 0; i <= 100; i++){
        if(i++ % 3 !== 0){
          console.log(total = total + i)
        }
    }
    console.log(`The sum of all evens from 0 to 100 is ${sum}`)
    console.log(`The sum of all odds is ${total}`)
    let arr = []
    arr.push(total)
    console.log(arr)//Trying
     
}
//13- Develop a small script which generate array of 5 random numbers
function exercise13(){
for (let i = 0; i <= 5; i++){
    console.log(Math.floor(Math.random() * i))
}
}
exercise13()

//14- Develop a small script which generate array of 5 random numbers and the numbers must be unique
function exercise14(){
let arr = [];
while(arr.length < 8){
    const random = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(random) === -1) arr.push(random);
}
console.log(arr);
}
exercise14()

//15- Develop a small script which generate a six characters random id:
function idRandom(){
let text = "";
const possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

for (let i = 0; i < 6; i++){
    text += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
    
}
console.log(text)
}
idRandom()
