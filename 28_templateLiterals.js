// Template Literals are alternative way of working with strings

// delimiting string using double or single qoute
'Hello, World!'
"Hello, World!"

// template string/literal- 
`hello world`;

// VARIABLE INTERPOLATION USING TL
let greet = "hello";
let place = "world";
console.log(`${greet} ${place} !`);
console.log(greet + " "+ place ); //regular string

// SPAN MULTIPLE LINES
`hello
World
!
`
// np with string literals


// EXPRESSION EVALUATION
console.log(`${1+1+1+1+1+} stars!`);

let first = `hello, how are you?`;
let second = `Im fine.`;
console.log( ` ${first} - and i Replied ${second}}` );
