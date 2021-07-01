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