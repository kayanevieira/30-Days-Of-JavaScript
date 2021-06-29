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

