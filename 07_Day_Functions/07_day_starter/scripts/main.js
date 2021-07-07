/*01- Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.*/

function randomUserIp(){
    let numberofChar = prompt('number of chars you want')
    let numberOfId = prompt('number of ids you want')
    let Ip = "";
    const possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    
    for (let i = 0; i < numberofChar; i++){
        Ip += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length)) 
        if(numberOfId > 1){
            let result = Ip * numberOfId
            console.log(result)
        }
    }
}
  randomUserIp()//tryind