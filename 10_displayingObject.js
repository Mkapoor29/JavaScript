// dislaying javascript objects

const employee = 
{
  name: 'John', 
  age: 30, 
  city: 'New York', 
  dateOfJoining: new Date(),
  salary: function()
  {
    return 10000 + 5*this.age;
  }
};
// method 1
console.log("-----------------------Method 1----------------------");

console.log(employee);
console.log(employee.name + ' is ' + employee.age + ' years old.' + ' He lives in ' + employee.city + '.');
console.log(employee['name'] + ' is ' + employee['age'] + ' years old.' + ' He lives in ' + employee['city'] + '.');

// method 2
console.log("-----------------------Method 2----------------------");
let output = '';
for(let x in employee)
{
  output += x + ": " + employee[x] + " ,";
}
console.log(output);



console.log("-----------------------Method 3----------------------");

// method 3
// A js object can be converted to an array using 
// Object.entries() method -> returns an array of arrays, where each inner array contains a key- value pair of the object
// Object.values() method -> returns an array of values of the object
const entries = Object.entries(employee);
console.log(entries);
const values = Object.values(employee);
console.log(values);
const keys = Object.keys(employee);
console.log(keys);


console.log("-----------------------Method 4----------------------");

// method 4
// A js object can be converted to a string using JSON.stringify() method
// it also converts the date object to a string
// it doesnot stringfy the functions
// it can atringify js arrays.
let stringObj = JSON.stringify(employee);
console.log(stringObj);

// to fix this, we can convert the function to a string before stringifying
employee.salary = employee.salary.toString();

let stringObj2 = JSON.stringify(employee);
console.log(stringObj2);
