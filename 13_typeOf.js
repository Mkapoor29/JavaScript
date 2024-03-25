console.log("typesOf string ", typeof("what is this"));
console.log("typesOf number ", typeof(10));
console.log("typesOf decimal ", typeof(3.14));
console.log("typesOf string boolean ", typeof(false));
console.log("typesOf comparison 1<22 ", typeof(1<22));
console.log("typesOf array ", typeof([1,2,3]));
console.log("typesOf object ", typeof({hello : 1}));
console.log("typesOf function ", typeof(function abc(){console.log("hello")}));


// typpeOf of array is aslo object
const fruits = ["apple", "banana", "mango"];
console.log("typesOf array ", typeof(fruits));
console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);
