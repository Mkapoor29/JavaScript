*
* When a bug happens, our code continues to run, but it behaves in a way that is not intended.
* When an error occurs, our code stops running and we get an error message.
*/

// example of a bug
function add(a, b)
{
    return a+b;
}
// this function is to add two numbers.
console.log(add(2,3));
// but what if we pass a string instead of a number?
console.log(add("2",3));



// example of an error
// console.log("hello);
// this line of code is missing a closing quote, so it will throw an  syntax error.

// console.log(c + d); // this will throw a reference error because c and d are not defined.

// ----------------------------------------------REFERENCE ERROR

// console.log(nameOfPerson);

// ----------------------------------------------SYNTAX ERROR

// var a "hell world";

// ----------------------------------------------TYPE ERROR
// "hello".pop();

// ----------------------------------------------RANGE ERROR
(10).toString(2);
(10).toString(8);
(10).toString(100); // this will throw a range error because the base is out of range.
