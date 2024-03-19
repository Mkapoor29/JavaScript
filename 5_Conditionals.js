// if-else
var age = 18;
if(age == 18 ) console.log("You are eligible to vote");
else console.log("Sorry , You are will have to wait to cast your vote");

// if-elseif
let number = 42;

if(number < 0 ) console.log("Number is greater than 0");
if(number > 0 ) console.log("Number is less than 0");
if(number == 0 ) console.log("Number is equal to 0");

// switch - when multiple if-elseif 

let light = "green";

switch(light)
  {
    case 'yellow':
        console.log('Get ready'); break;
    case 'red' :
          console.log('Stop'); break;
    case 'green': 
          console.log('drive'); break;
    default: 
          console.log('No match found'); break;
  }
