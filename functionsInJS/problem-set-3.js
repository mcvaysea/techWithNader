/*
    1. Write a function called "square":
    square will have 1 parameter:
        - num: this will be a number
    
    "square" will return the square of "num" (num**2)
    2. Write another function called sumOfSquares:
    sumOfSquares will have 2 parameters:
        - num1: this will be a number
        - num2: this will also be a number
    sumOfSquares will need to:
        1. Use the square function inside itself
        2. return back square of num1 + the square of num2
    3. Test the function using these:
     - const sum1 = sumOfSquares(2, 3); // "sum1" should be 13 (4 + 9)
     - const sum2 = sumOfSquares(3, 4); // "sum1" should be 25 (9 + 16)
*/

console.log("<------Problem Set 3------>");
// console.log(``);

//---- arrow function ----
// const sumOfSquares = (num1, num2) => {
//     let sumSquared = (num1 *= num1) + (num2 *= num2);
//     return sumSquared;
// }
// const sum1 = sumOfSquares(2, 3); // "sum1" should be 13 (4 + 9)
// const sum2 = sumOfSquares(3, 4); // "sum2" should be 25 (9 + 16)
// const sum3 = sumOfSquares(5, 9); // "sum3" should be 106 (25 + 81)

// console.log(sum1);
// console.log(sum2);
// console.log(sum3);

//---- regular function ----
// function sumOfSquares(num1, num2) {
//   let sumSquare = (num1 *= num1) + (num2 *= num2);

//   return sumSquare;
// }
// const sum1 = sumOfSquares(2, 3);
// const sum2 = sumOfSquares(3, 4);
// const sum3 = sumOfSquares(5, 9);

// console.log(sum1);
// console.log(sum2);
// console.log(sum3);

// console.log(sumOfSquares(2, 3));
// console.log(sumOfSquares(5, 9));

//////////////////////////////////////////////////////////////////

console.log(``);
console.log("<------Walkthru w/Nader------>");
console.log(``);

const square = (num) => {
  return num ** 2;
};

const sumOfSquares = (num1, num2) => {
  return square(num1) + square(num2);
};

const sum1 = sumOfSquares(2, 3); // "sum1" should be 13 (4 + 9)
const sum2 = sumOfSquares(3, 4); // "sum1" should be 25 (9 + 16)

console.log(sum1);
console.log(sum2);

console.log(sum1, sum2);
