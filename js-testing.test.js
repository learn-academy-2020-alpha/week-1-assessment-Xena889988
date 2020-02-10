// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

// describe("addThemUp", () => {
//   test("it should sum two numbers correctly", () => {
//     const sum = 1 + 2;
//     const expectedResult = 4;
//     expect(sum).toEqual(expectedResult);
//   })
// });


// --------------------1b) See the test fail. THEN write the code to make the test pass.


// describe("addThemUp", () => {
//   test("it should sum two numbers correctly", () => {
//     const sum = 1 + 2;
//     const expectedResult = 3;
//     expect(sum).toEqual(expectedResult);
//   })
// });


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.


describe("triangleArea", () => {
  test("it should show the area of a triangle", () => {
      let a = 3
      let b = 4
    const area = a * b / 2;
    const expectedResult = area; 
  })
});


// --------------------2b) See the test fail. THEN write the code to make the test pass.

// describe("triangleArea", () => {
//   test("it should show the area of a triangle", () => {
//       let a = 3
//       let b = 4
//     const area = a * b / 2;
//     const expectedResult = area;
//     expect(area).toEqual(expectedResult);
//   })
// });
