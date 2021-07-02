//01- Develop a small script which generate any number of characters random id:

//fe3jo1gl124g
//xkqci4utda1lmbelpkm03rba
function idRandom(){
    let text = "";
    const possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    
    for (let i = 0; i < 6; i++){
        text += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length))
        
    }
    console.log(text)
    }
    idRandom()//trying

/*02- Write a script which generates a random hexadecimal number.

'#ee33df'*/
let letters = '0123456789ABCDEF';
let color = '#'
for (let i = 0; i < 6; i ++){
color += letters[Math.floor(Math.random() * 16)]}
console.log(color)

/*03- Write a script which generates a random rgb color number.
rgb(240,180,80)*/
const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = console.log(`rgb(${r},${g},${b})`);

//04- Using the above countries array, create the following new array.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

for(let i = 0; i < countries.length; i++){
    countries[i] = countries[i].toUpperCase();
}
console.log(countries)

//05- Using the above countries array, create an array for countries length'.

//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let num = []
for (let i = 0; i < countries.length; i++){
    let arr = countries[i].length
    num.push(arr)
    
}
console.log(num)

    


