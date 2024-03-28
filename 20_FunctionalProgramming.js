function consoleLog(val)
{
    console.log(val);
    return val;
}

function doubleIt(num)
{
  return num * 2;
}

function objectMaker(val)
{
  return {prop: val};
}
// this fun when called w an argument , creates an object w a property prop that has the value of the argument

console.log(doubleIt(10).toString());
console.log(objectMaker(doubleIt(100)));


// ------------------------------RECURSION
// A function that calls itself
let num = 0;
function rec(num)
{
  console.log("Current Number is: ", num);
  if(num === 10) return;
  rec(num + 1);
}
rec(num);



// ------------------------------FIRST CLASS FUNCTIONS
/*
It means that a function in JavaScript is just another value that we can:

 - pass to other functions

 - save in a variable

 - return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number. 
*/



// ------------------------------HIGH ORDER FUNCTIONS
/*
A higher-order function is a function that has either one or both of the following characteristics:

 - It accepts other functions as arguments

 - It returns functions when invoked


There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.
*/

// var num1 = 10, num2 = 20;
// function getNum1(num)
// {
//   return num*8+20;
// }

// function getNum2(num)
// {
//   return num*4+20;
// }

// function addTwoNums(num1, num2)
// {
//   console.log(getNum1(num1) + getNum2(num2));
// }
// addTwoNums(10,20);



// function two() {
//   return 2;
// }

// function one() {
//   return 1;
// }

// function calculate(initialValue, incrementValue) {
//   return initialValue() + incrementValue() + incrementValue();
// }

// console.log(calculate(two, one));




function meal(animal) {
  animal.food = animal.food + 10;
}

var dog = {
  food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);


var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);
