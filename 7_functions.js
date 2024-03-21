// funstion wo parameters
function add()
{
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);
}
add(); //function call or function invokation

// function with parameters

function add(a, b)
{
  let c = a + b;
  console.log(c);
}
add(4,5);
add(7,90);


// function with return statement
let x = mul(4,5);
function mul(a, b)
{
  return a * b;
}


// () operator invokes the function;

let y = mul; // refers to function object and displays the code of function
let z = mul(6,8); //refers to function result.
