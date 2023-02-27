/*
    1. Create an array called "practice" with the numbers 25-30 (inclusive)
    2. Create another array using map that squares each number in "practice"
    
    3. Print out both "practice" and the new mapped array
*/
/* 
console.log("<------Warm-up Problem Set------>");
console.log(` `);

const practice = [25, 26, 27, 28, 29, 30];

const practiceSquared = practice.map((practice) => {
   return (practice *= practice);
} )

console.log(practiceSquared);
 */
//////////////////////////////////////////////////////////////////



console.log(` `);
console.log("<------Walkthru w/Nader------>");
console.log(` `);

const practice = [24, 25, 26, 27, 28, 29, 30];

const squares = practice.map( (numberArray) => {
   return (numberArray * numberArray);
})

console.log(practice);
console.log(squares);