/*03- if a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3*/

const a = 4
const b = 5
const result = a > 3 ? "Yep" : "Nope";
console.log(result)

/*04- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number
Enter a number: 9
9 is is an odd number.*/

function exercise4(){
const number = 2 
if (number % 2 == 0){
    console.log("Even")
}else{
    console.log("Odd")
    }
}

exercise4()