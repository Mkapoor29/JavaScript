// MATH OBJECT
console.log("-----------------MATH PROPERTY(CONSTANT)-------------------------------");
console.log(Math.E      );  // returns Euler's number
console.log(Math.PI     );  // returns PI
console.log(Math.SQRT2  );  // returns the square root of 2
console.log(Math.SQRT1_2);  // returns the square root of 1/2
console.log(Math.LN2    );  // returns the natural logarithm of 2
console.log(Math.LN10   );  // returns the natural logarithm of 10
console.log(Math.LOG2E  );  // returns base 2 logarithm of E
console.log(Math.LOG10E );  // returns base 10 logarithm of E



// NUMBER TO INTEGER METHODS
console.log("-----------------NUMBER TO INTEGER METHODS-------------------------------");
console.log("round of 4.7 is: ",Math.round(4.7)  );  // returns nearest integer
console.log("round of 4.4 is: ",Math.round(4.4)  );  // returns nearest integer
console.log("round of 4.5 is: ",Math.round(4.5)   );  

console.log("ceil of 4.4 is: ",Math.ceil(4.4));  // returns the value of x rounded up to its nearest integer
console.log("ceil of 4.9 is: ",Math.ceil(4.9));
console.log("ceil of 4.7 is: ",Math.ceil(4.7));
console.log("ceil of 4.4 is: ",Math.ceil(4.4));
console.log("ceil of 4.2 is: ",Math.ceil(4.2));
console.log("ceil of -4.2 is: ",Math.ceil(-4.2));


console.log("floor of 4.7 is: ",Math.floor(4.7));  // returns the value of x rounded down to its nearest integer
console.log("floor of 4.9 is: ",Math.ceil(4.9));
console.log("floor of 4.5 is: ",Math.ceil(4.7));
console.log("floor of 4.4 is: ",Math.ceil(4.4));
console.log("floor of 4.2 is: ",Math.ceil(4.2));
console.log("floor of -4.2 is: ",Math.ceil(-4.2));

console.log("trunc of 4.7 is: ",Math.trunc(4.7));  // returns the integer part of a number
console.log("trunc of 4.9 is: ",Math.trunc(4.9));
console.log("trunc of 4.4 is: ",Math.trunc(4.4));
console.log("trunc of 4.2 is: ",Math.trunc(4.2));
console.log("trunc of -4.2 is: ",Math.trunc(-4.2));


console.log("sign of 4 is: ",Math.sign(4));  // returns the sign of a number, indicating whether the number is positive, negative or zer-o
console.log("sign of -4 is : " ,Math.sign(-4));
console.log("sign of 0 is : ", Math.sign(0));



console.log("power of 2^3 is: ",Math.pow(2,3));  // returns the value of x to the power of y

console.log("square root of 64 is: ",Math.sqrt(64));  // returns the square root of x

console.log("absolute value of -4 is: ",Math.abs(-4));  // returns the absolute(psoitive) value of x

console.log("sin 90 is: ",Math.sin(90*Math.PI/180));  // returns the sine of x (x is in radians)
// angle in radians = angle in degrees * PI / 180

console.log("cos 0 is: ",Math.cos(0*Math.PI/180));  // returns the cosine of x (x is in radians)

console.log("Max in 0, 150, 30, 20, -8, -200 is: ",Math.max(0, 150, 30, 20, -8, -200));  // returns the number with the highest value
console.log("Min in 0, 150, 30, 20, -8, -200 is: ",Math.min(0, 150, 30, 20, -8, -200));  // returns the number with the lowest value

console.log("Math.log2(x) returns the base 2 log of x. Math.log2(8) is: ",Math.log2(8));
console.log("Math.log10(x) returns the base 10 log of x. Math.log10(100) is: ",Math.log10(100));

// -----------------MATH.RANDOM()-------------------------------

// generate a decimal number between 0 (inclusive) and 1 (exclusive) 0 to 0.99
Math.random();

// save it to a variable
var decimal = Math.random();
console.log("Random number between 0 and 1 is: ",decimal);
console.log("Random number between 0 and 10 is: ",Math.floor(decimal*10));
