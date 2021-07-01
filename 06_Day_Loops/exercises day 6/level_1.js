//01- Iterate 0 to 10 using for loop, do the same using while and do while loop
function one(){
for (let i = 0; i <= 10; i++){
    console.log(i)
}
    }
one()

function two(){
let i = 0
while(i <= 10){
    console.log(i)
    i++
}
}
two()

function three(){
let i = 0
do{
    console.log(i)
    i++
}while(i <= 10)
}
three()

//02- Iterate 10 to 0 using for loop, do the same using while and do while loop
function exercise1(){
for (let i = 10; i >= 0; i--){
    console.log(i)
}
}
exercise1()

function exercise2(){
let i = 10
    while(i >= 0){
        console.log(i)
        i--
    }
}
exercise2()

function exercise3(){
    let i = 10
    do{
        console.log(i)
        i--
    }while(i >= 0)
}
exercise3()
