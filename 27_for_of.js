// for-of cannnot work on an object directly, since an object is not iterable.
const person = {
  name: "Muskan",
  age: 21
}
// for(prop of car)
//   console.log(prop);
// Uncaught TypeError: perosn is not iterable


// Arrays are itertable
const arr = ["Muskan", "kapoor", 21, "pikachu"];
for (var in arr)
  console .log(var);

// WE can run for-of on array by knowing these three methods of objects:
// Object.keys() - recieves an object as a patrameter. The returned value is array of strings , where each string is property key of the properties contained in object.
// Object.values() = returns an array listing both the keys and values.
// Object.entries() - returns 2-member arrays nested inside an array. basically you gey an array of array, wherer each array item has two members, the first being a property's key , amd the second being a property's value.
const obj = {
  name = "hello World",
  wordLengh = 11,
  firstUsed: "while learning C"
}
console.log(Object.keys(obj));

for (const key of Object.keys(obj))
{
  console.log(key, ": ", obj[key)
}
