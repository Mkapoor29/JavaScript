function testUsingJest(val)
{
    return val + 5;
}

module.exports = testUsingJest;

// to check for node js -> node --version
// to check for npm -> npm --version
// to check for jest -> jest --version



// to add package.json -> npm init -y
// this command is installing jest for this project only.
//  the npm init -y command creates/ add a package.json file in the root of the project.
//  -y answers all the questions asked during installation with yes.

// package.json keeps track of all node modules the project depends on. 


// to install jest locally - npm install --save-dev jest

// package.json file will be updated with jest as a dev dependency.

// in the folder called node_modules which is where code for all modeules is saved.
// go to package.json and under "scripts" update "test" to "jest"

// to run the jest command -> npm run test

// to create the test file -> testUsingJest.test.js
//  add the dot test just before the dot js section of the file's name.

// import the function to be tested in test.js file



// PACKAGE.JSON
/*
{
  "name": "jewelryshop",
  "version": "1.0.0",
  "main": "testUsingJest.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "jest": "^29.7.0"
  }
}
*/

