//01- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Kayane';
const lastName = 'Vieira';
const country = 'Brasil';
const city = 'Porto Alegre';
const age = 18;
const isMarried = false;
const year = 2021;

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//02- Check if type of '10' is equal to 10
if (typeof '10' == 10){
    console.log("they are equal")
}else{
    console.log("they aren\'t equal")
}

//03- Check if parseInt('9.8') is equal to 10
if (parseInt('9.8') == 10){
    console.log('it\'s equal')
}else{
    console.log('not equal')
}

//04- Boolean value is either true or false.
    //01 -Write three JavaScript statement which provide truthy value.
    //02 -Write three JavaScript statement which provide falsy value.

//return true
const isBigger = 4 > 3;
const isEqual = 2 == 2;
const isDifferent = 2 != 3;
//return false
const isBigger2 = 4 < 3;
const isEqual2 = 2 != 2;
const isDifferent2 = 2 == 3;

//05- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3 //true
4 >= 3 //true
4 < 3 //false
4 <= 3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4'//true
4 == '4'//true
4 === '4'//false

//11- Find the length of python and jargon and make a falsy comparison statement.
const python = 'python';
const jargon = 'jargon';
console.log(python.length, jargon.length)

console.log(python.length == 5)
console.log(python.length != 6)

//06- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12//true
4 > 3 && 10 > 12//false
4 > 3 || 10 < 12//true
4 > 3 || 10 > 12//true
!(4 > 3)//false
!(4 < 3)//true
!(false)//true
!(4 > 3 && 10 < 12)//false
!(4 > 3 && 10 > 12)//true
!(4 === '4')//true

//11- There is no 'on' in both dragon and python
const dragonHasOn = 'dragon';
const pythonHasOn = 'python';

console.log(dragonHasOn.includes('on'));
console.log(pythonHasOn.includes('on'));

//07- Use the Date object to do the following activities

//What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
const now = new Date()
const yearr = now.getFullYear() 
const month = now.getMonth() 
const date = now.getDate() 
const day = now.getDay()
const hours = now.getHours() 
const minutes = now.getMinutes() 
const secondsSince1970 = now.getTime()


console.log(`${date}/${month}/${year} ${hours}:${minutes} - Dia da semana: ${day} - Seconds since January 1, 1970: ${secondsSince1970}`) 