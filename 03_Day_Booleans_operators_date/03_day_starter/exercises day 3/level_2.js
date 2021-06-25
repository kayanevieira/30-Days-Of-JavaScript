//01- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const numberOfBase = 20
const numberOfHeight = 10
const areaOfTriangle = (0.5 * numberOfBase * numberOfHeight)
console.log(`The area of the triangle is ${areaOfTriangle}`)

//02- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
const sideA = 20
const sideB = 10
const sideC = 5
const perimeter = (sideA + sideB + sideC);
console.log(`The perimeter of triangle is: ${perimeter}`)

//03- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const lengthOf = 20
const width = 10
const areaRectangle = (lengthOf * width)
const perimeterRectangle = (2 * (lengthOf + width))

console.log(`The area of rectangle is ${areaRectangle}`)
console.log(`The perimeter of rectangle is ${perimeterRectangle}`)