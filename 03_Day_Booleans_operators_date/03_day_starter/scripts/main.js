/*01- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let numberOfBase = prompt("Número de base?")
let numberOfHeight = prompt("Número da altura")
const areaOfTriangle = (0.5 * numberOfBase * numberOfHeight)
console.log(`The area of the triangle is ${areaOfTriangle}`)*/

//02- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*let sideA = prompt("Side A:")
let sideB = prompt("Side B:")
let sideC = prompt("Side C:")
const perimeter = (sideA + sideB + sideC);
console.log(`The perimeter of triangle is: ${perimeter}`)*/

/*03- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let lengthOf = prompt("What is the length?")
let width = prompt("What is the widt?")
const areaRectangle = (lengthOf * width)
const perimeterRectangle = (2 * (lengthOf + width))
console.log(`Perimeter of rectangle: ${perimeterRectangle}`)*/

/*04- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const radius = prompt("What is the radius")
const pi = 3.14
const areaOfCircle = (pi * radius * radius)
const circumferenceCircle = (2 * pi * radius)
console.log(`The area of a circle is: ${areaOfCircle}`)
console.log(`The circumference of a circle is: ${circumferenceCircle}`)*/

/*13- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.

const yearBirth = prompt("Enter birth year: ")
const age = (2021 - yearBirth)
const yearsToAllowed = (18 - age)

if (age >= 18){
    console.log(`You're ${age}. You are old enough to drive`)
}else{
    console.log(`You're ${age}. You will be allowed to drive after ${yearsToAllowed} years`)
}*/

/*14- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years


const numberOfYearsLived = prompt("enter number of years you live:")
const yearBorn = (2021 - numberOfYearsLived)
const yearwithQuotesToNewDate = `"${yearBorn}"`
const birthDate = new Date(yearwithQuotesToNewDate)
const nowDate = new Date()

if (numberOfYearsLived <= 100){
    const result = (nowDate.getTime() - birthDate.getTime())
    const totalLived = (result / 1000)
    console.log(`You lived ${totalLived} seconds`)
}*/

