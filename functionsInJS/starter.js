/////////////////////////////////////////////////////////////
//////////////JavaScript Functions Examples/////////////////
///////////////////////////////////////////////////////////
/* 
console.log(`--- regular function ---`);

function regPrintHello() {
    console.log(`Mellow yellow`);
console.log(`Woof`);
}

regPrintHello();
regPrintHello();
  */

//////////////////////////////////////////////////////////////////
/* 
console.log(`--- arrow function ---`);

const arrowPrintHello = () => {
    console.log('Hello, jello');
    console.log(`Meow`);
}

arrowPrintHello();
arrowPrintHello();
arrowPrintHello();
 */

/////////////////////////Print function with aurguments/////////////////////////////////////////
/* 
//--- regular function ---
function printMany(message, num) {
  for (let i = 0; i < num; i++) {
    console.log(message);
  }
}

printMany("Hello World", 5);
 */

/* 
//--- arrow function ---
const printMany = (message, num) => {
    for (let i = 0; i < num; i++) {
        console.log(message);
    }
}

printMany("hi there", 5);
 */

/////////////////////////Function to sum 2 numbers/////////////////////////////////////////
/* 
//--- regular function ---
function sum(num1, num2) {
    console.log(num1 + num2);
};

sum(8,10);
sum(3,3);
 */

/* 
//--- arrow function ---
const sum = (num1, num2) => {
  console.log(num1 + num2);
};

sum(5, 6);
sum(10, 10);
sum();
sum(6);
 */
/* 
const sum = (num1, num2) => {
  return num1 + num2;
};

const result = sum(10, 20);
var result2 = sum(80, 10);
let result3 = sum(5, 10);
console.log(result);
console.log(result2);
console.log(result3);
 */

/* 
function sum(num1, num2) {
  return num1 + num2;
};

const result = sum(10, 20);
var result2 = sum(80, 10);
let result3 = sum(5, 10);
console.log(result);
console.log(result2);
console.log(result3);
 */

//////////////////////Multiple function////////////////////////////////////////////
/* 
//--- arrow function ---
const mult = (num1, num2) => {
    return num1 * num2;
};

const result = mult(10, 10);
console.log(result);
console.log(mult(2, 3));
 */

/* 
//--- regular function ---
function mult(num1, num2) {
  return num1 * num2;
};

const result = mult(10, 10);
console.log(result);
console.log(mult(2, 3));
  */

////////////////////Basic funtion example///////////////////////////////////////////

/* 
//--- arrow function ---
const hello = () => {
    console.log('yo!');
    return "HELLO";
}

hello();

//function reassign and called
const result = hello();
console.log(result);
returned = hello();
 */

//////////////////////////////////////////////////////////////////
/*  
//--- arrow function ---
const printHello = () => {
  console.log("Hello");
}

printHello();


//--- regular function ---
function oldPrintHello(person) {
  console.log(`Hello ${person}`);
}
oldPrintHello("Sean");
 */

//////////////////////////////////////////////////////////////////

/* 
//--- arrow function ---
const sayHello = () => {
  console.log(`Hello my jello`);
};

sayHello("Sean");
sayHello("Tim");
sayHello("Tam");
sayHello();


const sayHelloToo = (person) => {
  console.log(`Hello my jello ${person}`);
};

sayHelloToo("Sean");
sayHelloToo("Tim");
sayHelloToo("Tam");
sayHelloToo();
 */

/* 
//--- regular function ---
function sayHello1 () {
  console.log("Hello my Jello");
}
sayHello1();

function sayHello2 (person) {
  console.log(`Hello my Jello ${person}`);
}
sayHello2("Sean");
 */

//////////////////////////////////////////////////////////////////
/* 
//--- arrow function ---
const sum = (num1, num2) => {
  console.log(num1 + num2);
};

sum(5, 6);
sum(10, 10);
sum();
sum(5);
 */
//////////////////loop function with aurguments/////////////////////////////

/* 
//--- arrow function ---
const printManyThings1 = (message, num1) => {
  for (let i = 0; i < num1; i++) {
    console.log(message);
  }
};
printManyThings1("You will get this", 5);

//--- regular function ---
function printManyVer2(message, num1) {
  for (i = 0; i < num1; i++) {
    console.log(message);
  }
}
printManyVer2("I WILL to get this", 7);

printManyThings1("Moo", 50);
 */

////////////////function with return/////////////////
/* 
//--- arrow function ---
const mult = (num1, num2) => {
  return num1 * num2;
};

mult(2, 3); //nothing printed...this is just a call
console.log(mult(2, 3)); // calling the function inside console.log for output

const multResult = mult(10, 10); //assign the returned value to a variable
let muli2Result = mult(5, 8); //returned value assigned with 'let'
console.log(multResult); //conosle log const
console.log(muli2Result); //console log let

//--- regular function ---
function multipler(num1, num2) {
  return num1 * num2;
}
multipler(3, 9); 
console.log(multipler(3, 9));
const myFirstMulti = multipler(6, 3);
let mySecondMulti = multipler(4, 9);
console.log(myFirstMulti);
console.log(mySecondMulti);
 */

////////////////function without a return/////////////////
// const moo = (num1, num2) => {
//   console.log(num1 + num2);
//   //return num1 + num2;
// }

// moo(20, 40);
// const mooResult = moo(100, 50);
// console.log(mooResult);

// const hello = (bananaPeanutButter) => {
//   console.log("yo", bananaPeanutButter);
//   console.log(`Literal "yo ${bananaPeanutButter}"`);
// };

// hello("you are my mellow");
// hello("my mellow jello");

// const helloResult = hello("mystro");
// console.log(helloResult);
