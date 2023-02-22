/*
    Create a for loop that will print out all the even numbers
    between 10 and 40.
    Do the same for all odd numbers as well.
*/

console.log("<------Problem Set 1------>");
console.log(``);

for (i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(`\nEven number: ${i}`);
  } else {
    console.log(`\nOdd number: ${i}`);
  }
}


/* 
console.log(``);
console.log("<------Walkthru w/Nader------>");
console.log(``);

console.log(`For even numbers`);
for (let i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log(`\n`);
console.log(`For odd numbers`);
for (let i = 10; i <= 40; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
 */
