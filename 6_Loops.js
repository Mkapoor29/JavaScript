// for loop
const name = ["Muskan", "Kashish", "Manik", "Atul", "Abhishek"];
let text = "";
// var i = 70;
// let i = 80;
for(let i = 0; i< name.length;i++)
{
  text += name[i]; +"<br>";
}
// console.log("value of i is: ",i); // error for i declared in loop is undefined.
console.log("text is: ",text);


// for-in : loops through properties of object.

const me = {fname: "Muskan", lname: "Kapoor", age: 21, dob:"01/29/2003"};
const info = "";
for (let x in me)
{
  info += me[x]+" |||| ";    
}
console.log(info);

const numbers = [23,78,65,90,45];
let num = "";
for(let x in numbers)
{
  num += numbers[x]+ " ";
}
console.log(num);
// for-in in array is not recommendod if index is important


// forEach() method calls a callback function once for each array elemsnt.
numbers.forEach(myFun);
function myFun(value, index, array)
{
  console.log(index + ": "+ value)
}

/ for-of : loops through the values of an iterable object.
let language = "JavaScript";
let lang = "";
for(let x of language)
{
  lang += x + " ";
}
console.log(lang);

let i = 0;
while(i<10)
{
  console.log(i);
  i++;
}
i = 0;
while(names[i])
{
  console.log(names[i]);
  i++;
}

