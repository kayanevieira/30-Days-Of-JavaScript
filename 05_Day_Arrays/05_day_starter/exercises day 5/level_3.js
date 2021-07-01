/*01- he following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    01- Sort the array and find the min and max age
    02- Find the median age(one middle item or two middle items divided by two)
    03- Find the average age(all items divided by number of items)
    04- Find the range of the ages(max minus min)
    05- Compare the value of (min - average) and (max - average), use abs() method*/

//01
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
var min = Math.min(...ages)
var max = Math.max(...ages)
//02
let medianNumbers = ages.slice(4,6)
const result = (parseInt(medianNumbers) + parseInt(medianNumbers)) / 2
console.log(result)

//03
var sum = 0;
for(var i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let totalAverage = console.log(sum / ages.length)
//04
function getMaxMin(){
let minNumber = Math.min.apply(null, ages)
let maxNumber = Math.max.apply(null, ages)
let numberRage = maxNumber - minNumber
return numberRage
}
let {maxNumber, minNumber} = getMaxMin()
//05
if (maxNumber > minNumber){
    console.log(Math.abs(minNumber - maxNumber))
}else{
    console.log("maximum is not greater than minium")
}
//01- Slice the first ten countries from the countries array/DONE in countries.js
//02- Find the middle country(ies) in the countries array/DONE in countries.js


