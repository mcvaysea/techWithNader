/*
    Create a for loop that will print out all the even numbers
    between 10 and 40.
    Do the same for all odd numbers as well.
*/

console.log("<------Problem Set 1------>");
console.log(``);

let numberVar = 10;

while (numberVar <= 40) {
  if (numberVar % 2 == 0) {
    console.log(`The even numbers are: ${numberVar}`);
  }
  if (numberVar % 2 != 0) {
    console.log(`The odd numbers are: ${numberVar}`);
  }
  numberVar++;
}

console.log(``);
console.log("<------Walkthru w/Nader------>");
console.log(``);

let number = 10;

while (number <= 40) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}
