/* 
    1. Declare a variable using let with any name you like, but without a value.
    2. On a separate line, assign the variable the String: "Moo!"
    3. Log out this variable to the terminal using console.log
    
    Repeat the above steps but try using a const variable. What happens?
*/



console.log("<-----Variable Decleration then Assignment----->");

let emptyVar;
console.log('variable "emptyVar" was declared but unassigned:' , emptyVar);

emptyVar = "Moo!";
console.log('variable "emptyVar" is now assigned to the value of:' , emptyVar);


// const conVar;
// conVar = 43;
// console.log('variable "conVar" was declared but unassigned:' + conVar);
//// CONST VALUES NEED TO BE DECLARED AND ASSIGNED AT THE SAME TIME BECAUSE
//// THEY ARE IMMUTABLE AND CANNOT BE UNASSIGNED
//// BELOW IS HOW YOU SHOULD DO IT 
const constVar = 'Mao!';
console.log('const "constVar" is now assigned with:' , constVar);





