//01- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

/*Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/

const age = prompt("Enter your age: ")
const yearsToBeAllowed = (18 - age)

if (age >= 18){
    console.log(`You're ${age}. You are old enough to drive`)
}else{
    console.log(`You're ${age}. You will be allowed to drive after ${yearsToBeAllowed} years`)
}