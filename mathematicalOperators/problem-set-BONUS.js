/*
    1. What happens when you add 2 strings together?
    2. What about when you add a number to a string?
    3. How about when you add booleans together?
    Try to think about how these behaviours might work,
    as well as why it might happen.
*/

/* 
// string concatenation
console.log("<------BONUS Problem Set------>");

let myVar1 = "Hello";
let myVar2 = "World.";
let myNum1 = 5;

console.log(myVar1 + " " + myVar2);
console.log("------ ------");
// let myvar3 = myVar1 + myVar2;
// console.log(myVar3);

console.log(myVar2 + 'Goodnight');

console.log("------ ------");
let myVar4 = myVar1 + " # " + myVar2;
console.log(myVar4);

console.log("------ ------");
let myVarNum = myVar1 + myNum1;
console.log(myVarNum);

console.log(myVar1 + 5);
console.log(myNum1 + "five");
console.log(myNum1 + myVar1);
console.log("hello" + 5);

console.log("------ ------");
console.log("Hello", "World");
console.log("Hellos" + " Worlds");

console.log("------ ------");
myvar5 = myVar1 += myVar2;
console.log("this is myVar5", myvar5);

console.log("<------BOOLEANS------>");
let bool1 = true;
let bool2 = false;
console.log(bool1 + bool2);
console.log(bool1 + bool1);
console.log(bool1 + bool1 + bool1);
console.log(bool1 + bool2 + bool1);
console.log(bool1 + bool2 + bool2);
console.log(bool2 + bool2 + bool2);
 */

console.log("<------Walkthru w/Nader------>");

let animal = "dog";
animal += " says woof!";
console.log(animal);

let hello = "cat" + 10;
console.log(hello);

let bools = true + true;
console.log(bools);

let bools2 = false + false;
console.log(bools2);

bools3 = bools2 + true;
console.log(bools3);
