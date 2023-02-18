////////////////////////////////////////////////////////////
//////////////CONDITIONAL STATEMENTS IN JS/////////////////
//////////////////////////////////////////////////////////

/* 
console.log(`<------if Statement------>`);
let happy = true;
if (happy === true) {
    console.log("Yay!!");
} */

/* 
console.log(`<------if Statement------>`);
let points = 10;

if (points > 5) {
    console.log("You have more than 5 points!");
    console.log('Boo!');
}
 */

/* 
console.log(`<------if Statement w/outer code------>`); 
let happy = false;
if (happy === true) {
    console.log("Yay!!");
}  
console.log("All Done!");



let points = 10;

if (points > 52) {
  console.log("You have more than 5 points!");
  console.log("Boo!");
}
console.log(`All Done!`);
 */

/* 
console.log(`<------if/else Statement------>`);
let happy = true;
happy = false;
if (happy === true) {
  console.log("Yay!");
} else {
  console.log(`Oh, no...`);
}

let points = 23;
if (points > 20) {
  console.log("You have more than 20 points!");
} else {
  console.log("you have less than 20 points");
}
console.log(`all done!`);
 */

/* 
console.log(`<------if/else-if Statement------>`);

let score = 20;
if (score > 30) {
  console.log("You scored above 30!");
} else if (score > 20) {
  console.log("Your score is between 20 and 30.");
}
console.log(`All Done!`);
 */

let health = 51;

if (health > 50) {
  console.log("You have more than 50% health!");
} else if (health > 30) {
  console.log("You have between 30 and 50 health!");
} else if (health > 20) {
  console.log("You are running low on health!");
} else {
  console.log("You have less than or equal to 20 health!");
}
console.log("Game Over");

/* 
let score = 19;

if (score > 30) {
    console.log("You scored above 30!");
} else if (score > 20) {
    console.log("Your score is between 20 and 30");
} else {
    console.log("You scored less than 20.");
}
console.log(`All DONE!`);
 */
