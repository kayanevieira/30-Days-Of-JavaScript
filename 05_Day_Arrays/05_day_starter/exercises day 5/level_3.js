/*01- he following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method*/

let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
function exercise7(){
let biggestNumber = 0

for(let i = 0; i < ages.length; i++){
    if (ages[i] > biggestNumber){
        biggestNumber = ages[i]
    }
    
}
console.log(biggestNumber)