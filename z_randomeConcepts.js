// ARRAYS ARE OBJECTS
const arr = [1,2,3,4];
console.log(typeOf(arr));
console.log(Array.isArray(arr));
console.log(arr instanceof Array);

// TOSTRING() CAN CONVERT VALUE OF X OF THE BASE 10 NUMBER SYTEM, TO ITS COUNTERPART IN THE BASE Y NUMBER SYSTEM.
// (10).toString(2); //1010  convert value of 10 in base10 system into 1010 in base2 system.
// (10).toString(8); // 12


// TRY AND CATCH BLOCKS ARE USED TO HANDLE ERRORS THROWN AT EXECUTION/RUN TIME. HENCE THEY CANNOT HANDLE SYNTAX ERRORS(COMPILE TIME ERRORS).
try {
console.log('hello)
} catch(e) {
console.log('caught')
}



// DIFFERENCE BETWEEN FOR-IN AND FOR-OF AND USING THEM ON OBJECTS.
// 1) for - in statement iterartes a specified variable over all enumerable objects of an object.
fun forIn(obj, objName)
{
  let result = "";
  for (const i in obj)
    {
      result +=  `${objName}.${i} = ${obj[i]}<br>`;
    }
  result += "<hr>";
  return result;
}
// for-in will return the name of user-defined properties in addition to numeric values


// CREATING OBJECTS USING Object.create
var bird = 
{
  hasWings: true,
  canFly: true,
  hasFeathers: true
}
var eagle1 = Object.create(bird);
console,log("eagl1e: ", eagle1); // eagle1: {}

console.log("eagle1 has wings: ", eagle1.haswimgs); // eagle1 has wings: true

var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("penguin1)
