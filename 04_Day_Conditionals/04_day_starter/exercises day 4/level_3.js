/*01- Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/

 function exercise1(){
  let month = 'january'
  month = month.toLowerCase()

  if (month == 'january' || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'december'){
      console.log(`${month} has 31 days`)
  }else if (month == 'april' || month == 'june' || month == 'september' || month == 'november'){
      console.log(`${month} has 30 days`)
  }else if (month == 'february'){
      console.log(`${month} has 28 days`)
  }else{
      console.log("invalid month")
  }
 }
exercise1()

//02- Write a program which tells the number of days in a month, now consider leap year.
function exercise2(){
    let month = 'february'
    month = month.toLowerCase()
  
    let yearNow = new Date()
    yearNow = yearNow.getFullYear()
  
    if (month == 'january' || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'december'){
        console.log(`${month} has 31 days`)
    }else if (month == 'april' || month == 'june' || month == 'september' || month == 'november'){
        console.log(`${month} has 30 days`)
    }else if (yearNow % 4 == 0 && month == 'february'){
        console.log(`${month} has 29 days`)
    }else if (month == 'february'){
        console.log(`${month} has 28 days`)
    }else{
        console.log('invalid month')
    }
   }
 exercise2()