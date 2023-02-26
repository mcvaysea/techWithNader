/*
    Write a function called "noRemainder":
    1. This function has two parameters:
        - number
        - mod
    2. The function will return:
        - true: if "number" is evenly divisible by "mod" (no remainder)
        - false: if "number" is not evenly divisible by "mod" (has a remainder)
    3. Call your function like so:
        const result1 = noRemainder(10, 7); // result1 should be false
        const result2 = noRemainder(100, 10); // result2 should be true
*/

console.log("<------Problem Set 1------>");
console.log(``);
/* 
const noRemainder = (number, mod) => {
  if (number % mod === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// noRemainder(10, 2);
const result102 = noRemainder(10, 2);
const result1 = noRemainder(10, 7);
const result2 = noRemainder(100, 10);
const result3 = noRemainder(15, 10);
 */
//console.log(`10 / 2 has no remainder: ${noRemainder(10, 5)}`);
//console.log(`10 / 2 has no remainder: ${noRemainder(105, 5)}`);
//console.log(`${noRemainder(15, 5)}`);

//////////////////////////////////////////////////////////////////

//console.log(``);
console.log("<------Walkthru w/Nader------>");
console.log(``);

// const noRemainder = (number, mod) => {
//     if (number %  mod === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
const noRemainder = (number, mod) => {
  if (number % mod === 0) {
    return true;
  }
  return false;
};

const result1 = noRemainder(10, 7); // result1 should be false
const result2 = noRemainder(100, 10); // result2 should be true

console.log(result1);
console.log(result2);
console.log(result1, result2);
