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