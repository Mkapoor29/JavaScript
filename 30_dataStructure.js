// ------------------------------------------------ARRAYS
const gradesArr = [1,2,3,4,5];

// method1 - forEach()
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
/*To explain the syntax, the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:*/
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// method2 = filter()

/*It filters your arrays based on a specific test. Those array items that pass the test are returned.

Here's an example:*/
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})
// o/p -> [30,40,50]

// method3 - map()
/*This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. */
[0,10,20,30,40,50].map( function(num) {
    return num / 10
}) //o/p -> [0,1,2,3,4,5]

// ------------------------------------------------OBJECTS
// objects key-value pair
const car = {
  owner : "John",
  color: "red",
  engineOn: function() 
    {
      console.log("engine is on);
    }
}

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)


// ------------------------------------------------MAP
// -- key-vale pair
// -- hash function
// --   it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); //console output -> Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

// To get a specific value, you need to use the get() method. For example:
bestBoxers.get(1); // 'The Champion'


// ------------------------------------------------SET
// set - unique collection of values
const set = new Set();
const h1 = 'red'; const h2 = 'blue'; const h3 = 'green';
set.add(h1).add(h2).add(h3); console.log (set);


const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // {'apple', 'pear', 'plum'}
