/*
Types of empty values->
-> Undefined
-> Null
-> Empty Strings
*/

// -------------------------------------------------NULL VALUE
/*
intentional absence of any object value.
*/

var letters = 'abc';
console.log(letters.match(/a/)); // returns an array [ 'a', index: 0, input: 'abc', groups: undefined ]
console.log(letters.match(/d/)); // returns null


// -------------------------------------------------UNDEFINED VALUE
/*
1) Undefined is a primitive value that represents the lack of a value or a non-existent value. It acts like a placeholder for a value that JS engine knows to exist but hasn't been specified yet.
2) Every function returns undefined by default unless return a value is specified.
3) Accessing an object property that doesn't exist returns undefined.
*/

console.log('Hello World'); // this returns undefined after printing Hello World to console cus console.log is a function and we are not returning a value from it.
var a; // declared but not initialized hence undefined
console.log(a); // returns undefined

// console.log(b); // Uncaught ReferenceError: b is not defined

var game = {score: 10};
console.log(game.Score); // returns undefined because Score is not a property of game object.



// -------------------------------------------------EMPTY STRING VALUE
var name1 = ''
