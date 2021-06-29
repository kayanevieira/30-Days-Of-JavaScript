/*01- Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/

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

/*02- Check if the season is Autumn, Winter, Spring or Summer.
If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

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