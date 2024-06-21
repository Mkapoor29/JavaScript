const {default : TestRunner} = require('jest-runner');
const testUsingJest = require('./testUsingJest');

// '/' indicates the function is in the same folder as the test file and omitted the dot js because Node understands what I mean, even if I don't use it.

test('returns the number plus 5 ', () => {
    expect(testUsingJest(5)).toBe(10); 
})
// the arguments of test function are:
// The string will be output in the command line when I run the test along with the words pass or fail, 
// and the function to run when I execute the NPM run test command. 

// to run the test in the jest folder -> npm run test
