/*
    Create a variable called "bakery" that points to an array
    Fill the array with the following String:
        - "Cake"
        - "Cookie"
        - "Bread"
        - "Scone"
    Print out bakery to make sure it has these 4 Strings in it.
    Create another variable called "myBakery" and assign it
    to "bakery" that we declared previously
    Add the following items to "myBakery":
        - "Croissant"
        - "Granola"
    Print out myBakery and bakery and observe the contents.
    WHY is this?
*/

console.log("<------BONUS Problem Set------>");
console.log(` `);

const bakery = ["Cake", "Cookie", "Bread", "Scone"];
console.log(bakery);

const myBakery = bakery;
console.log(myBakery);

myBakery.push("Croissant");
myBakery.push("Granola");
console.log(myBakery);
console.log(bakery);
bakery.push("Cheescake", "Danish");
console.log(myBakery);
console.log(bakery);




//////////////////////////////////////////////////////////////////

// console.log(` `);
// console.log("<------Walkthru w/Nader------>");
// console.log(` `);
