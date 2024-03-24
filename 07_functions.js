// funstion wo parameters
function add()
{
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);
}

// function declaration 
add(); //function call or function invokation

// function with parameters
function add(a, b)
{
  let c = a + b;
  console.log(c);
}
add(4,5);
add(7,90);
/*
--- PARAMETER RULES
JS function definations do not specify data types for parameters.
JS finctions do not perform type checking on passed arguments.
JS functions do not check the number of arguments recieved.
*/

// DEFAULT PARAMETERS
// if a function is called with missing arguments, the missing values are set to be undefined.
function missDefPar(x,y)
{
  if(y===undefined) y = 2;
  console.log(x+y);
}
missDefPar(2);

function defPar(x , y = 2)
{
  return x+y;
}
let d = defPar(10);

// ----------------------------FUNCTION REST PARAMETER---------------
function sum(...args)
{
  let sum = 0;
  for ( let x of args ) sum+=x;
  return sum;
}
let x = sum(1,2,3,4,5,6,7,8,9,10);
console.log(x);

// ------------------------------------------------------------------------------------------------
// function with return statement
// function used as value
let x = mul(4,5);
function mul(a, b)
{
  return a * b;
}


// () operator invokes the function;

let y = mul; // refers to function object and displays the code of function
let z = mul(6,8); //refers to function result.


// anonymous self-invoking function
(
  function ()
  {
    let x = "hello";
  }
)();
// Function expressions will execute automatically if the expression is followed by ().


// ARROW FUNCTION
const a = (x , y) => { return x * y} ;
a(5, 5);
a(5, 6);
/*
Arrow functions do not have their own this. They are not well suited for defining object methods.
Arrow functions are not hoisted. They must be defined before they are used.
Using const is safer than using var, because a function expression is always constant value.
You can only omit the return keyword and the curly brackets if the function is a single statement. 
*/
const b = (x, y) => x * y;
b(4,5);


// FUNCTIONS ARE OBJECT
function lenArg(a,b,c,d)
{
  return arguments.length;
}
lenArg(1,2,3,4);
console.log(typeof(add)); // returns 'function' for objects
