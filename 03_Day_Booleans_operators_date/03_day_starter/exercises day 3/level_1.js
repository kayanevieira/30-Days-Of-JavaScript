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
