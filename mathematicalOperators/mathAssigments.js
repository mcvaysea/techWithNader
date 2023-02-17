//////////////////////////////////////////////////////////////
//////////////Mathematical Assignments in JS/////////////////
////////////////////////////////////////////////////////////

////////////////////////////
//Math Assignment Operators
///////////////////////////

let points = 10;
console.log("value of points is set to:", points);

points++;
console.log("points is now incremented by 1:", points);

let score2 = 20;
console.log("score2 is initially set to:", score2);
score2--;
console.log("score2-- decrements by 1:", score2);

let score3 = 30;
console.log("score3 is currently set to:", score3);
score3 += 6;
console.log('we added 6 to score3 with "+=6":', score3);
score3 -= 50;
console.log('here we subtracted with "-=50" from the current value:', score3);

let age = 10;
age *= 3;
console.log("10 *= 3 gives us:", age);
age /= 2;
console.log("age was 30 but /=2 results in:", age);

let age2 = 7;
age2 %= 7;
console.log(
  "modulus %=7 is: " + "'" + age2 + "'" + " because there is no remainder"
);

let age3 = 7;
age3 %= 6;
console.log(
  "modulus %=6 is: " + "'" + age3 + "'" + " because there is a remainder"
);

let age4 = 7;
age4 **= 2;
console.log('exponetiation of 7 "**=2" is:', age4);
