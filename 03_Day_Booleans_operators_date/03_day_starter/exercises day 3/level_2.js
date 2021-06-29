//09- Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

//Enter hours: 40
//Enter rate per hour: 28
//Your weekly earning is 1120

const hoursWorked = 40
const ratePerhour = 28
const weeklyEarning = (ratePerhour * hoursWorked)
console.log(`Your weekly earning is ${weeklyEarning}`)

//10- If the length of your name is greater than 7 say, your name is long else say your name is short.
const namee = 'kayane'

if (namee.length > 7){
    console.log('your name is long')
}else{
    console.log('your name is short')
}

//11- Compare your first name length and your family name length and you should get this output.

//let firstName = 'Asabeneh'
//let lastName = 'Yetayeh'
//Your first name, Asabeneh is longer than your family name, Yetayeh

const firstName = 'Kayanee'
const lastName = 'Vieira'

if (firstName.length > lastName.length){
    console.log(`Your first name ${firstName} is longer than your family name ${lastName}`)
}else{
    console.log(`Your first name ${firstName} is shortter than your family name ${lastName}`)
}

//12- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

    //let myAge = 250
    //let yourAge = 25
    //I am 225 years older than you.

    const myAge = 250
    const yourAge = 25
    const yearsOlder = (myAge - yourAge)
    console.log(`I am ${yearsOlder} years older than you`)

//13- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

/*Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/

const yearBirth = 2006
const age = (2021 - yearBirth)
const yearsToAllowed = (18 - age)

if (age >= 18){
    console.log(`You're ${age}. You are old enough to drive`)
}else{
    console.log(`You're ${age}. You will be allowed to drive after ${yearsToAllowed} years`)
}

/*14- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
*/
const numberOfYearsLived = 18
const yearBorn = (2021 - numberOfYearsLived)
const yearwithQuotes = `"${yearBorn}"`
const birthDate = new Date(yearwithQuotes)
const nowDate = new Date()

if (numberOfYearsLived <= 100){
    const result = (nowDate.getTime() - birthDate.getTime())
    const totalLived = (result / 1000)
    console.log(`You lived ${totalLived} seconds`)
}

//15- Create a human readable time format using the Date time object

//YYYY-MM-DD HH:mm
//DD-MM-YYYY HH:mm
//DD/MM/YYYY HH:mm

let date1 = new Date();
let formatDate1 = ((date1.getFullYear() )) + "-" + ((date1.getMonth() + 1)) + "-" + date1.getDate() + " " + date1.getHours() + ":" + date1.getMinutes(); 
console.log(formatDate1);

let date2 = new Date();
let formatDate2 = ((date2.getDate() )) + "-" + ((date2.getMonth() + 1)) + "-" + date1.getFullYear() + " " + date2.getHours() + ":" + date2.getMinutes(); 
console.log(formatDate2);

let date = new Date();
let formatDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes(); 
console.log(formatDate);

