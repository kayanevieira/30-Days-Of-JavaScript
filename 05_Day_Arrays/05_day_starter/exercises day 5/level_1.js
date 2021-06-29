//01- Declare an empty array
function exercise1(){
const arr = []
console.log(arr)
}
exercise1()

//02- Declare an array with more than 5 number of elements
 const arr = [
     'javascript',
     'python',
     'java',
     'c#',
     'cobol'
 ]
 console.log(arr)

 //03- Find the length of your array
 console.log(arr.length)

 //04- Get the first item, the middle item and the last item of the array
 const firsItem = arr[0]
 const middleItem = arr[2]
 const lastItem = arr[4]

 //05- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

 function exercise5(){
    const arr = [
        10,
        '10',
        true,
        {firstName: 'kay', lastName: 'vieira'},
        false,
        'string'
    ]
    console.log(arr.length)
 }
exercise5()

//06- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]
//07- Print the array using console.log()
console.log(itCompanies)

//08- Print the number of companies in the array
console.log(itCompanies.length)

//09- Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

//10- Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])


//11- Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//12- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = itCompanies.slice(0, itCompanies.length - 1).join(', ') + ", and " + itCompanies.slice(-1) + " are IT companies";
console.log(sentence)
