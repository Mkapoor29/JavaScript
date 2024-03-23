// find max element in a list of numbers
function findMax()
{
  let max = -Infinity;
  for(let i = 0; i< arguments.length;i++)
    {
      if arguments[i]>max) 
      {
        max = arguments[i];
      }
    }
  return max;
}
let x = findMax(1,89,87,65,45,90,654);
console.log("Max is: ",x);


// find sum of all elements in list 
function findSum(...ele)
{
  let sum = 0;
  for( let x of ele) sum += x;
  return sum;
}
let y = findSum(23,45,280,20);
console.log("Addition is: ",y);


// find min
function findMin()
{
  let min = +Infinity;
  for(let i = 0; i<arguments.length; i++)
    {
      if(min<arguments[i])
      {
        min = arguments[i];
      }
    }
  return min;
}
let z = findMin(12,78,45,90,0,-1);
console.log("Min is: ",z);

// letterFinding
function letterFinder(word, match)
{
    for(let i = 0;i<word.length;i++)
    {
        if(match==word[i])
        {
            console.log("Match found at",i);
            // break;
        }
        else console.log("No match found at",i);
    }
}
letterFinder("test","t");

/*
1) Arguments are passed as values
2) Objects are passed by refrence.
3) In function, this refers to gloabl object. In a function , in strict mode, this is undefined. 
*/
