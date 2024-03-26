try
{
    console.log(a+b);
}
catch(err)
{
    console.log(err)
    console.log(err.message);
    console.log(err.name);
    console.log('The error was saved in the error.log file');
}
console.log('The program doesnt stop here');

try
{
    throw new SyntaxError('There is a syntax error in the program');
}
catch(err)
{
    console.log(err);
}
console.log("Hello World");


function isNumeric(x)
{
    return ["number", "bigint"].includes(typeof x);
}

function sum(...values)
{
    if(!values.every(isNumeric))
    {
        throw new TypeError('All the values must be numbers');
    }
    return values.reduce((a,b) => a+b, 0);
}
console.log(sum(1,2,3,4,5));
try
{
    sum('1','2');
} 
catch(err)
{
    console.log(err);
}
console.log('helloWorld222');


try
{
    throw new Error('This is an error');
}
catch(err)
{
    console.log(err);
}
console.log('Hehe we printed an error.');
