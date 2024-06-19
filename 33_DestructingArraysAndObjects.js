/*
imagine an array or object is a project folder containng several files in it.
Destructing something out of array/ object meansin this case copying one file from folder on to another location. The original item still exists in your project folder.
*/
let {PI} = Math;
console.log(PI);
PI === Math.PI; // true;

let {pi} = Math;
console.log(pi); // undefimed

PI = 1;
PI === Math.PI; // false

// -----------------------------------Basic Array Destructuring
const fruits = ['apple', 'banana', 'cherry'];
const [first, second, third] = fruits;

console.log(first);  // Output: apple
console.log(second); // Output: banana
console.log(third);  // Output: cherry

// Skipping Elements
const [firstFruit, , thirdFruit] = fruits;

console.log(firstFruit);  // Output: apple
console.log(thirdFruit);  // Output: cherry

// Using Rest Parameter to collect remaining elements
const [firstItem, ...restItems] = fruits;

console.log(firstItem); // Output: apple
console.log(restItems); // Output: ['banana', 'cherry']

// ------------------------------------Basic Object Destructuring
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(city); // Output: New York

// Destructuring with different variable names
const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30
console.log(personCity); // Output: New York

// Setting default values
const { name: firstName, country = 'USA' } = person;

console.log(firstName); // Output: John
console.log(country);   // Output: USA

// --------------------------------------Nested Object Destructuring
const employee = {
  id: 1,
  personalInfo: {
    name: 'Jane',
    age: 25,
    address: {
      city: 'San Francisco',
      state: 'CA'
    }
  }
};

const { personalInfo: { name: empName, age: empAge, address: { city: empCity, state: empState } } } = employee;

console.log(empName);  // Output: Jane
console.log(empAge);   // Output: 25
console.log(empCity);  // Output: San Francisco
console.log(empState); // Output: CA


// Basic Object Destructuring
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(city); // Output: New York

// Destructuring with different variable names
const { name: personName, age: personAge, city: personCity } = person;

console.log(personName); // Output: John
console.log(personAge);  // Output: 30
console.log(personCity); // Output: New York

// Setting default values
const { name: firstName, country = 'USA' } = person;

console.log(firstName); // Output: John
console.log(country);   // Output: USA

// Nested Object Destructuring
const employee = {
  id: 1,
  personalInfo: {
    name: 'Jane',
    age: 25,
    address: {
      city: 'San Francisco',
      state: 'CA'
    }
  }
};

const { personalInfo: { name: empName, age: empAge, address: { city: empCity, state: empState } } } = employee;

console.log(empName);  // Output: Jane
console.log(empAge);   // Output: 25
console.log(empCity);  // Output: San Francisco
console.log(empState); // Output: CA


// ------------------------Mixed Destructing
const user = {
  id: 42,
  isVerified: true,
  details: ['John', 'Doe']
};

const { id, isVerified, details: [firstName, lastName] } = user;

console.log(id);         // Output: 42
console.log(isVerified); // Output: true
console.log(firstName);  // Output: John
console.log(lastName);   // Output: Doe


// -------------------------------- Function with Object Destructuring in Parameters
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = {
  name: 'Alice',
  age: 28
};

displayPerson(person); // Output: Name: Alice, Age: 28

// Function with Array Destructuring in Parameters
function sum([a, b]) {
  return a + b;
}

const numbers = [5, 10];

console.log(sum(numbers)); // Output: 15
