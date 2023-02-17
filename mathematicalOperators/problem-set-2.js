/*
    1. Create a let variable called "points" and print it out
    2. Assign "points" the number 20 and print it out
    3. Add 15 to "points" and print it out
    Question1: What are all the ways you can achieve step 3 above?
    Question2: What would happen if you tried to do this with a const variable?
*/
/* 
console.log("<------Problem Set 2------>");

let points;
console.log(points);

points = 20;
console.log(points);

points += 15;
console.log(points);

points = points + 15;
console.log(points);
 */
// this cannot be achieved with the 'const' variable because it is an immutable or 'fixed' value when assigned.


console.log("<------Walkthru w/Nader------>");

let points;
console.log(points);

points = 20;
console.log(points);

// One way to add for points
//
// points = points + 15;
// console.log(points);
//
// Alternative assignment method
//
points += 15;
console.log(points);

// With a CONST variable

// const points; //CANNOT DO THIS