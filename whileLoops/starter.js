/////////////////////////////////////////////////////////////
//////////////TITLE GOES HERE TO START PAGE/////////////////
///////////////////////////////////////////////////////////
/* 
console.log(`<==== While Loops ====>`);
console.log(``);



console.log(`--- greeting loop ---`);
const greeting = "hola!";

console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);
console.log(greeting);


console.log(``);
console.log(`--- loop thru i ---`);
let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}
 */

/* 
console.log(``);
console.log(`--- while number loop ---`);

const greeting = "Hola!";
let number = 0;
let i = 1;

while (number < 13) {
  console.log(greeting + " " + i);
  number++;
  i++;
}
console.log(`greeting complete`);
 */

/* 
console.log(``);
console.log(`--- while break loop ---`);

const greeting = "Hola!";
let number = 0;
let i = 1;

while (number < 3) {
  console.log(greeting + " " + i);
  break;
  number++;
  i++;
}
console.log(`greeting complete: caused by break`);
 */
/* 
console.log(``);
console.log(`--- another while break loop ---`);

let counter = 5;

while (counter <= 10) {
    console.log(counter);
    break;
    console.log("increasing counter...");
    counter++;
}

console.log(`Thanks for playing!`);
 */

console.log(``);
console.log(`---  while break2 loop ---`);

let score = 0;

while (true) {
  console.log(`inside the loop!`);

  if (score >= 3) {
    break;
  }

  if (score === 2) {
    break;
  }

  console.log(`score is ${score}`);
  score++;
}

console.log(`done with the loop!`);
