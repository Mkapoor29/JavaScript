/*           CONSTRUCTORS            */
//JavaScript has a number of built-in object types, such as:
//Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.
//These objects are sometimes referred to as "native objects".


// To use a constructor, new keyword is used.
new Date();
// But not aall built in constructors come with constructor function
// new Math(); // throws am Uncaught TypeError informing us that Math is not a constructor.
// They dont have constuctors becuase tgey are static objects whose properties and methode can be accessed directly.
Math.pow(2,5);//32


// 1) apple variable is an object of string wheraeas pear is a string literal that is a primitive Javascript value.
let apple = new String ("apple");
apple; // String {'apple'};
let pear = "pear";
pear // "pear"

//2)  Comparing objects always return false because its t=not the value paased to construcror that are being compatred, its the memory locations where objects are saved.
new String('plum') === new String ('plum'); // false
"plum" === "plum" // true

// 3) A RegEXp object is another built in objects in js. Its used to pattern-match strings
"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]



// ------------------------------------------------------------------------DEFAULT PARAMETERS
function noDefaultParameter(number)
{
  console.log(number*number);
}
noDeafualtParameter(); // NaN

function withDefaultParameter(number = 5)
{
  console.log(number*number);
}
withDeafualtParameter(); // 25

class NoDefaultPar
{
  constructor(num1, num2, num3, string1, bool1)
  {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate()
  {
    if( this.bool1 )
    {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}
var fail = noDefaultPar(1,2,3,false);
fail.calculate();


class WithDefaultPar
{
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result: ", bool1 = true)
  {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate()
  {
    if( this.bool1 )
    {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}
var betterCode = new WithDefaultPar();
betterCode.calculate();

