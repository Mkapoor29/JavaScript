// objects are key value pairs.

// ---------------------------------------- CREATING OBJECTS ------------------------------------

// USING AN OBJECT LITERAL
const manager = {firstName:"Abc", lastName: "Xyz", age:40, dept:"Pharmacy", eyeColor: "brown"};
const emp = {
  firstName:"Def",
  lastName:"Pqr",
  manager: "Abc Xyz",
  job: "Cashier"
};

console.log(manager);//display the object 
console.log(manager.firstName);

// Add another properties using dot operator.
manager.salary = 40000;
console.log(manager);

// Delete Properties
delete manager.eyeColor;
console.log(manager);

// ------------------------------------------------NESTED OBJECTS-----------------------
const obj1 = 
{
    name: "obj1",
    dob: "290103",
    likes: {
        pokemon: "Pikachu",
        color: "black"
      }
};
console.log(obj1.likes.color);


// -----------Values in arrays can be objects and values in objects can be arrays.--------------

const nestedObject = 
  {
    lang: "javascript",
    style: "css",
    body : "html",
    frameworks: [
      {name: "Bootstrap", versions:[1,2,3]},
      {name: "React", versions:[4,5,6]}
    ]
  }
// accessing arrays inside arrays
let x = "";
for( let i in nestedObject.frameworks)
  {
    x += "<h2>" + nestedObject.frameworks[i].name+"</h2>";
    for(let j in nestedObject.frameworks[i].versions)
      {
        x+=nestedObject.frameworks[i].versions[j]+"<br>";
      }
  }
console.log(x);
// ------------for...in loop ----------------
text = "";
for(let x in emp)
{
  text += emp[x] +" ";
}
console.log(text);
/* -------------- OBJECT METHODS----------------------------------------------------------------
In an object method, this refers to the obejct.
*/
const hello = {
  fname: "Muskan",
  lname: "Kapoor",
  fullName: function()
    {
      return this.fname + " " + this.lname;
    }
};
let name = hello.fullName();  console.log(name);
console.log(hello.fullName) //returns function defination.

// ADDING METHOD TO AN OBJECT
emp.name = function()
  {
    return this.firstName + " " + this.lastName;
  };
console.log(emp);




/*---------------------------------------------JS OBJECTS ARE MUTABLE----------------------------
Objects areb mutable. They are addresssed by reference , not by value.
*/
const m = manager; 
// does not create copy of object manager
// both m and manager are same object.
m.age = 41; 
// any changes to x will also change manager.
