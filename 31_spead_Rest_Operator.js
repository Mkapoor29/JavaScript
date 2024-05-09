/* SPREAD OPERATOR
It is the shortest and simplest method to copy the properties of an object onto a newly created object. 
It can can spread out array items and join objects together.
It unpack tge array.
*/

let num = [1,2,3,4];
function add(num1,num2,num3,num4)
{
  console.log("Num1 is: ", num1);
  console.log("Num2 is: ", num2);
  console.log("Num3 is: ", num3);
  console.log("Num4 is: ", num4);
}

add(num[0], num[1], num[2], num[3]);
add(...num)


/* REST OPERATOR
It is used to a smaller box, and pack items into it.
If we want to store particular data items from an array we use rest operator.
*/

// int this case we want the first three items from the num array.
const [] = num;
const [first, second , third ...restNums] = num;
// first = 1, second = 2, third = 3 , restNums = "4 5 6" these are stored as string primitives.
// the rest opertaor gives us what is left over the source array as a seperate sub array.

let shopping = addTax(1.1, 46,89,35,79);
function addTax(taxRate, ...num)
{
  return num.map(item=> taxrate * num);
}
console.log(shopping); // [50.6, 97.9, 38.5, 86.9]


// JOINIG ARRAYS OR CONCATENATE ARRAYS USING REST OPERATOR
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array


// joining objects.
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// ADDING NEW MEMBERS TO ARRAYS WO PUSH() METHOD.
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies); //['onion', 'parsley', 'carrot', 'beetroot']


// CONVERT STRING TO ARRAY USING SPREAD OPERAOR
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

// COPY EITHER AN ARRAY OR AN OBJECT INTO A SEPERATE ONE
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car 2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) //The output is 201, 200.


// You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2) // ['apples'] 'not' ['apples','pears']
// the spread operator only performs a shallow copy of the source array or object.



