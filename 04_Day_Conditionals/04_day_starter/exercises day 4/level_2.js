/*01- Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
function exercise1(){
let totalScore = 50
if (totalScore >= 80 && totalScore <= 100){
    console.log("A")
}else if(totalScore >= 70 && totalScore <= 89){
    console.log("B")
}else if(totalScore >= 60 && totalScore <= 69){
    console.log("C")
}else if(totalScore >= 50 && totalScore <= 59){
    console.log("D")
}else{
    console.log("F")
    }
}
exercise1()
/*02- Check if the season is Autumn, Winter, Spring or Summer.
If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
function exercise2(){
const month = "July"

if (month == 'September' || month == 'October' || month == 'November'){
    console.log("It's Autumn")
}else if(month == 'December' || month == 'January' || month == 'February'){
    console.log("It's Winter")
}else if(month == 'March' || month == 'April' || month == 'May'){
    console.log("It's Spring")
}else if(month == 'June' || month == 'July' || month == 'August'){
    console.log("It's Summer")
    }
}
exercise2()
/*03- Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/
function exercise3(){
let day = 'sunday'
day = day.toLowerCase()
if (day == 'saturday' || day == 'sunday'){
    console.log(`${day} is a weekend`)
}else if(day === 'monday' || day === 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday'){
    console.log(`${day} is a working day`)
}else{
    console.log('invalid day')
    }
}
exercise3()