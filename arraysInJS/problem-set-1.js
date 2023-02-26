/*
    1. Create a variable called "multiple" and initialize it to 5
    2. Create an array with the numbers 10-15 (inclusive)
    3. Loop through the array and on each iteration:
        - Multiply the number by the multiple and print out the result
        - As you're printing, use this format (example):
            10 x 5 = 50
            11 x 5 = 55
            ...
            15 x 5 = 75
    BONUS: Try to see if you can make it so that all you need to change
    is the "multiple" variable and the program still works correctly.
*/

console.log("<------Problem Set 1------>");
// console.log(` `);

// let multiple = 5;

// const numbers = [10, 11, 12, 13, 14, 15];

// for (let i = 0; i < numbers.length; i++) {
//     mult = numbers[i] * multiple;
//     console.log(`${numbers[i]} * ${multiple} = ${mult}`);
// }



//////////////////////////////////////////////////////////////////



console.log(` `);
console.log("<------Walkthru w/Nader------>");
console.log(` `);

const multiple = 11;
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

// for (let i = 0; i < numbers.length; i++) {
//     const result = multiple * numbers[i];
//     console.log(`${numbers[i]} x ${multiple} = ${result}`);
// }


function multiplier(numbers, multiple) {
    for (let i = 0; i < numbers.length; i++) {
      const result = multiple * numbers[i];

      return `${numbers[i]} x ${multiple} = ${result}`;
    }
}

console.log(multiplier(numbers[], multiple));