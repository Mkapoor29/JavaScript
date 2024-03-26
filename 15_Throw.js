// THROW


/*
1. the throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
*/

// Example 1
// throw new ReferenceError('This is a reference error');
// console.log('This will not be executed');


// ----------------------------------------------------------------------

// the following syntax are wrong
/*
throw  //illegal newline after throw
new Error('This is a syntax error');

throw; //throw must be followed by an expression
new Error('This is a refrence error');
*/


throw(
    new Error('This is a syntax error')
);



// ----------------------------------------------------------------------
