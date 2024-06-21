/*
TDD - TEST DRIVEN DEVELOPMENT
-  TDD for short is a streamlined process of writing code that will satisfy some requirements.
- A software development teams work consists of the following receiving requirements which will become a feature of the app that's being developed. 
- Writing a failing test for that to build feature before it gets built.
- Making this failing test pass by coding that given feature in comparison with the traditional development process, that TDD approach might seem somewhat upside down.
- Suppose you have to perform a task, drive your car to work. 
  You leave your house and walk up to your car, only to find out that you don't have your car keys with you. 
  Then you remember you left your car keys in the cabinet and you simply forgot to take them what you did there. 
- In this imagined scenario is the opposite of TDD. 
- You first walk to your car and only then did you check if you had your car keys 
   if you did these things using the TDD approach, you would do the following first. 
   You check or test if you have your keys with you. 
   Your test fails because you don't have them. They're in the cabinet. 
   Then you perform the action of getting your keys from the cabinet. 
   Finally, you check or test if you have your keys this time you have them. So your test now passes. 
*/

/*
// ------------ check if the first function exists
test('returns true if statusOfKeys exists', function() { 
  expect (statusOfKeys).toBeDefined()
})

--- run the test. test fails because there is no statusOfKeys function declared.
--- you declare the function and run the test. test confirms the function exists and hence the test pass.
function statusOfKeys() {}

---  one of the rules of TDD is that you should write as little code as possible to make the test pass for this test to pass, 
--- it's enough to just declare a function with the name 

--- second requirement -> expect a keys variable, which should be set to true and console log the keys variable.
--- requirement states the status of keys function should accept a previously declared keys variable, which should be set to true. 
--- The status of keys should then console log the value of the keys variable.

test('returns true if statusOfKeys exists', function() { expect(statusOfKeys).toBeDefined() })
function statusOfKeys() {}
--- the test fails
--- to pass the test , write the implementation of function
const statusOfKeys = require('./statusOfKeys');
const spyConsoleLog = jest.spyOn(console, 'log' );
spyConsole.log.mockImplementation(keys => keys)
test( 'returns true if statusOfKeys exists', function() { expect(statusOfKeys).toBeDefined() })

test ('test console log inside statusOfKeys', function() {
  statusOfKeys(true); 
  expect(console.log).toBeCalled();
  expect(spyConsoleLog.mock.calls[0][0]).toBe(true);
  spyConsoleLog.mockReset();
  spyConsoleLog.mockRestore();
})

function statusOfKeys(keys) {console.log(keys)};

*/


// read new requiremnet
// write failing test
// update source code
// run test that passes
// refactor implementation
 
