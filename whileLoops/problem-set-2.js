/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a for loop that loops while "loggedIn" is false.
    3. Each loop, print out: "Incorrect login credentials"
    3. After 3 loop iterations, change "loggedIn" to be true.
    4. After the loops is done print out: "Sucessfully logged in!"
    HINT1: This is more challenging with a for loop
    HINT2: This is not an ideal candidate for a for loop!
    HINT3: You don't have to provide all parts of the for loop construct
*/

console.log("<------Problem Set 2------>");
console.log(``);

/* 
let loggedIn = false;
let i = 0;

while (loggedIn === false) {
  if (i < 3) {
    console.log(`Incorrect login credentials`);
    i++;
  } 
    
  }
 */

console.log("<------Walkthru w/Nader------>");
console.log(``);

let loggedIn = false;
let loopCounter = 1;

while (!loggedIn) { 
    console.log(`Incorrect login credentials! loop ${loopCounter}`);
    if (loopCounter === 3) {
        loggedIn = true;
    }
    loopCounter++;
}

console.log(`Successfully logged in!`);


