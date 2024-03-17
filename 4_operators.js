// assignment operator

let a = 4;
// assign value 4 to a.

// ARITHMATIC OPERATORS

let b = 5;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a ** b;
// a raise to power b = Math.pow(a,b)
let g = a/b;
let h = a % b;
let i = a++;
let j = b--;


/*
ASSIGNMENT OPERATORS
x = y 
x += y
x -= y
x *= y
x /= y
x %= y
x **= y
*/

// COMPARISON OPERATORS

let k = 6; 
let l = 7;
console.log(k == l); //equal to
console.log(k === l); //equal to and equal type
console.log(k != l); //not equal to
console.log(k !== l); // not equal to or not equal type
console.log(k>l); // greater than
console.log(k>=l); // greater than or equal to
console.log(k<l); // less than
console.log(k<=l); // less than or equal to

// LOGICAL OPERATORS
let m = 3 , n = 8;
console.log( m < 10 && n > 7);
console.log( m < 2 || n > 7);
console.log( !(m==4));

//   TERNARY OPERATOR
let age = 21;
let value = (age>20) ? "Yes" : "No";
// (condition)?value1:value2


// NULLISH COALESCING OPERATOR
let m = null;
let n = "empty";
let o = m??n;
// ?? returns first argument if it is not nullish(null or undefined) otherwise second argument.

// OPERATIONAL CHAINING OPERATOR
// ?. returns undefined if an object is undefined or null(instead of throwing an error).
const p = { value : 1 , color: "pink"};
let q = p?.name;


// ------------------------------------------------------ STRINGS

let text1 = "20";
let text2 = "10";
console.log(text1<text2);
console.log(text1, text2);
console.log(text1+ " "+ text2);
let text3 = "hello";
text1 += text3;
console.log(text1);

