/*
    1. Create a for loop that runs from 1-100 
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!
    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/
/* 
console.log("<------Problem Set 3------>");
console.log(``);

let loopingNum = 1;

while (loopingNum <= 100) {
  if (loopingNum % 10 == 0 && loopingNum !== 50 && loopingNum !== 100) {
    console.log(`Checkpoint! ${loopingNum}`);
  }

  if (loopingNum === 50) {
    console.log("Half way there!");
  }

  if (loopingNum === 100) {
    console.log("You made it!!");
  }

  loopingNum++;
}
console.log("All Done!");

console.log(``);
console.log("<------Walkthru w/Nader------>");
console.log(``);
let count = 1;

while (count <= 100) {
  if (count === 50) {
    console.log(`Half way there!`);
    count++;
    continue;
  }

  if (count === 100) {
    console.log(`You made it!`);
    count++;
    continue;
  }

  if (count % 10 === 0) {
    console.log(`Checkpoint! ${count}`);
  }
  count++;
}
console.log(`All, Done!!`);
 */