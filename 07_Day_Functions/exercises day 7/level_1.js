//01- Declare a function fullName and it print out your full name.
function fullName(){
    let fullName = 'Kayane Vieira'
    console.log(fullName)
}
fullName()

function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
//02- Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function printFullName (){
    let firstName = 'Kayane'
    let lastName = 'Vieira'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
printFullName()

//03- Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(para1, para2){
    return para1 + para2
    
}
console.log(addNumbers(2, 2))

//04- An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(lengthOfRectangle, widthOfRectangle){
    const area = lengthOfRectangle * widthOfRectangle
    return area
}
console.log(areaOfRectangle(5, 5))

//05- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterRectangle(lengthOfRectangle, widthOfRectangle){
    const perimeter = (lengthOfRectangle + widthOfRectangle) * 2
    return perimeter
}
console.log(perimeterRectangle(2, 2))

//06- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeRectangular(lengthOfRectangle, widthOfRectangle, heightOfRectangle){
   let volumeOfReactPrism = lengthOfRectangle * widthOfRectangle * heightOfRectangle
   return volumeOfReactPrism
}
console.log(volumeRectangular(2, 5, 10))

//07- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius){
    let area = Math.PI * radius * radius
    return area
}
console.log(areaOfCircle(5))

//08- Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
console.log(circumOfCircle(10));

//09- Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityOfSubstance(mass, volume){
    const density = mass / volume
    return density
}
console.log(densityOfSubstance(4, 2))

//10- Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speedMovingObject(distance, time){
    const speed = distance / time
    return speed
}
console.log(speedMovingObject(10, 5))

//11- Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightCalculator(mass, gravity){
    const weight = mass * gravity
    return weight
}
console.log(weightCalculator(10, 5))

//12- Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(oC){
    const oF = (oC * 9 / 5) + 32
    return oF
}
console.log(convertCelciusToFahrenheit(5))

//13- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bmiCalculator(weight, height){
    const bmi = weight / (height * height)
    return bmi
}

if (bmiCalculator(60, 1.65) < 18.5){
    console.log('underweight')
}else if(bmiCalculator(60, 1.65 >= 18.5 || bmiCalculator(60, 1.65) <= 24.9)){
    console.log('normal')
}else if(bmiCalculator(60, 1.65) >= 25 || bmiCalculator(60, 1.65) <= 29.9){
    console.log('overweight')
}else{
    console.log('morbid obese')
}

//14- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    let season = ''
if (month == 'September' || month == 'October' || month == 'November'){
    season = 'It\'s autumn'
    console.log(season)
}else if(month == 'December' || month == 'January' || month == 'February'){
    season = 'It\'s Winter'
    console.log(season)
}else if(month == 'March' || month == 'April' || month == 'May'){
    season = 'It\'s Spring'
    console.log(season)
}else if(month == 'June' || month == 'July' || month == 'August'){
    season = 'It\'s Summer'
    console.log(season)
    }
    return season
}
checkSeason('January')

//15- Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

/*console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0*/
function findMax(num1, num2, num3){
    const result = Math.max(num1, num2, num3)
    return result
}
console.log(findMax(2, 5, 6))

