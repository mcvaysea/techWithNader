/*
    Create a variable called "greeting" and initialize it to:
        "Hello, nice to meet you!"
    
    Use a loop to loop through this String (just like you would an array)
        - On each loop iteration, print out what is at that index

    WHY does this happen?
    WHAT is a String, really?
*/

console.log("<------Problem Set 2------>");
/* 
console.log(` `);

const greeting = "Hello, nice to meet you!";
// console.log(greeting);
// console.log(greeting.length);

for (i = 0, j = 1; i < greeting.length; i++, j++) {
    console.log(greeting[i] + ": " + j);
}
 */



//////////////////////////////////////////////////////////////////


/* 
console.log(` `);
console.log("<------Walkthru w/Nader------>");
console.log(` `);
 */

const greeting = "Hello, nice to meet you!";

for (i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
