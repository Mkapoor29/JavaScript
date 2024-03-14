var person; // variable declartion
person = "John"; // assignment
console.log("hello", person);
var greeting = "hello";
console.log(greeting, person);
// changing values of variables 
greeting = "hi";
person = "James";
console.log(greeting +" "+ person);

/*
variables can be declared 
1. automatically
2. let
3. var
4. const 



1) const is used if the value and type should not be changed.
2) var is used to support old browsers

*/
let name; // it has no value and is undefined.
// a variable declared wo a value will have a value of undefined. 

let grade = "a", cgpa = 8.9, degree = "CSE";

// declartion can span multiple lines as well:
let lang = "javascript",
  doc = "abc",
  price = 9.78;


// re-declartion
var  x = 5;
x = 8;

// redeclartion with let or const is not possible.

let a = "Muskan" + " " + "Kapoor";
let b = "5" + 2 + 3; //523;
let c = 5 + 2 + "3"; //73
// if you put a number in quotes the rest of numbers will be treated as strings and hence concatenated.


/*--------------------------------------------LET---------------------------------------------------*/

/*
Variables with ley have
  1) block scope
  2) cannot be redeclared in same scope
  3) must be declared before use.
*/

// 1
{
  let c = 2;
  console.log(c);
}
// console.log(c);

// 2
let d = "Muskan"
d = 0;
console.log(d);

let e = 10;
var f = 40;
{
  let e = 2;
  var f = 30;
  console.log(e);
  console.log(f);

  // let e = 5; // redeclartion not allowed
}
console.log(e);
console.log(f);


// redeclaration within another block
let g = 8;
console.log(g);
{
  let g = 6;
  console.log(g);
}

{
  let g = 9;
  console.log(g);
}
console.log(g);


/*--------------------------------------------CONST---------------------------------------------------*/

// For declaring new array, new object , new function use const
/*
1) Const doesn't mean constant value. It means constant reference to a value.
2) we cannot reassign a
                  constant value
                  constant array
                  constant object
3) but we can change
            elements of constant array
            properties of constant objects
*/


const persons = ["Abc", "Def", "Ghi"];
// persons = ["cba", "fed", "ihg"] // error 

persons[1] = "fed";
persons.add("Jkl");


const subject = { type: "programming" , name :" Javascript" , batch: 2021};
// subject = {} // error
subject.name = "Python";
subject.department = "eng";


// scope of const
const h = 10;
console.log(h);

{
  const h = 5;
  console.log(h);
}
console.log(h);



// Redeclartion

var i = 6; 
// const i = 6 // error
console.log(i);
{
  let i = 6 ;
  // const i = 6; // error
  console.log(i);
}

{
  const i = 8;
  // const i = 6; // error
  console.log(i);
}
console.log(i);

// Reassinging a const variable in same scope is not allowed

const j = 7;
// not allowed->
// j = 7 
// var j = 7;
// let j = 7;
// const j = 7;
console.log(j);
{
  const j = 5;
  // rest again not allowed
  console.log(j);
}
console.log(j);
