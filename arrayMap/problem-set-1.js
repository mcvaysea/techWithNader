/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]
    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 0
    3. Print out both arrays
    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/
/* 
console.log("<------Problem Set 1------>");
console.log(` `);

const bools = [true, true, false, true, false, false];

const returnRandom = bools.map((boolArray) => {
    if (boolArray === true) {
      return Math.random().toFixed(3);
    } else {
        return 0;
    }
})

console.log(returnRandom);
 */
//////////////////////////////////////////////////////////////////



console.log(` `);
console.log("<------Walkthru w/Nader------>");
console.log(` `);


const bools = [true, true, false, true, false, false];


const mappedBools = bools.map((bool) => {
    if (bool === true) {
      return (Math.random());
    } else {
        return 0;
    }
});

console.log(bools);
console.log(mappedBools);

