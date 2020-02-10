// // ASSESSMENT 1: INTRO TO JAVASCRIPT
// // Coding practical questions

// // Please read all questions thoroughly
// // Psuedo coding is highly recommended

// // --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// // Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// // if statement for testing temperrature below boiling point
//     if (temp1 < temp3) {console.log (`${temp1} is below boiling point`);} 
// // if statement for testing temperrature above boiling point    
//     if (temp2 > temp3) {console.log (`${temp2} is above boiling point`);}
// // if statement for testing temperrature at a boiling point
//     if (temp3 == 212) {console.log (`${temp3} is at a boiling point`)}



// // --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// // Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]

// for(let i=0; i<myNumbers1.length; i++){
//     console.log(myNumbers1[i] * 5);
// }

// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

// var myNumbers2 = [8, -7, 0, 6, 2]

// mult5 = (array) => {
//     let newArr = array.map(value => value * 5 )
//     return newArr
// }
// console.log(mult5(myNumbers2))


// // --------------------4) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = function (HeyThereLearnStudent) {
// var stringWithVowels2 = "ILoveJavaScript"
// var stringWithVowels3 = stringWithVowels1.concat(stringWithVowels2);
    


// ONE WAY TO DO THIS
// stringWithVowels3 =  stringWithVowels3.replace( /[aeiou]/g, '' );

// console.log(stringWithVowels3);

// ANOTHER WAY OF DOING IT
// function disemvowel(stringWithVowels3) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   return stringWithVowels3.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }

// console.log(disemvowel(stringWithVowels3));

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

// var notAString1 = true
// var notAString2 = 42

// have no idea what i am doing
// if (typeof index === "number")
//     alert("Varaible is undefined");
//     else alert("Variable is defined"); 

// var index = 2; 
//     var result = (typeof index === 'number');
//     alert(result);




// // --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]
const onlyCat = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++){
    if(typeof === "cat"){
      newArr.push(array[i])
    }
  }
  return newArr
}

console.log(onlyCat(toonimals))


// // --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// // Expected output: "Itchy" "Daffy" "Ren"
