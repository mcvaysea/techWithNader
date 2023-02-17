/* 
   Create a constant variable of each of the following primitive types:
   - String
   - Number
   - Boolean
   - Null
   - Undefined

   Use console.log to log out each variable to the terminal at the end.
   
   HINT1: You can run your file in the terminal using this command: node <file_name>
          For example, if your file is called ps1.js, you would type: node ps1.js
   HINT2: Make sure your terminal is "looking at" the correct folder where your code is
*/

console.log("<---String Data--->");
const animal1 = "Elephant";
var animal2 = "Tiger";
let animal3 = "Monkey";
console.log("Your listed animals are: " + animal1 + "," + animal2 + "," + animal3);

console.log("<---Number Data--->");
const lucky = 7;
var PI = 3.14;
let cost = 44.79;
console.log("Your numbers are: " + (lucky) + "," + (PI) + "," + (cost));


console.log("<---Boolean Data--->");
const learningNew = true;
const goodAtIt = false;
let mySelf = true;
var sunnyOutside = false;
console.log(learningNew , goodAtIt , mySelf , sunnyOutside);


console.log("<---Null and Undefined Data--->");
const value1 = null;
const value2 = undefined;
var value3 = undefined;
let value4 = null;
console.log(value1 , value2);
console.log(value3);
console.log(value4);
