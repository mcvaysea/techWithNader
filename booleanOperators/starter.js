///////////////////////////////////////////////////////
//////////////BOOLEAN OPERATORS IN JS/////////////////
/////////////////////////////////////////////////////

/*
== Equal To

=== Strict Equal To

!= Not Equal To

!== Strict Not Equal To

> Greater Than

< Less Than

>= Greater Than or Equal To

<= Less Than or Equal to

&& Logical AND

|| Logical OR

?? Nullish Coalescing
*/

console.log("<----AND CASES---->");
let test1 = true && "bananas";
console.log(test1);

let test2 = false && "oranges";
console.log(test2);

let test3 = 0 && "apples";
console.log(test3);

console.log("<----OR CASES---->");

let test4 = true || "baskets";
console.log(test4);

let test5 = false || "pear";
console.log(test5);

let test6 = 0 || "cherry";
console.log(test6);

console.log("<----COALESCING CASES---->");
let test7 = true ?? "beans";
console.log(test7);

let test8 = false ?? "pineapple";
console.log(test8);

let test9 = 0 ?? "pita";
console.log(test9);

console.log("<------------>");
let test10 = "" || "peach";
console.log(test10);
