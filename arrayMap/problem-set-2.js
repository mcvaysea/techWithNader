/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]
    2. Create a new array using map called "taxedPrices" that:
        - If the price is greater than 10, add 20% tax to it
        - Otherwise, do not add any tax
    3. Print out both arrays
*/

/* 
console.log("<------Problem Set 2------>");
console.log(` `);

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const taxedPrices = prices.map((price) => {
    if (price >= 10) {
     price = (price * 0.2) + price;
        return price.toFixed(2);
    } else {
        return price;
    }
})

console.log(taxedPrices);
 */

//////////////////////////////////////////////////////////////////

console.log(` `);
console.log("<------Walkthru w/Nader------>");
console.log(` `);

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const taxedPrices = prices.map((price) => {
  if (price > 10) {
    return (price * 1.2).toFixed(2);
  } else {
    return price;
  }
});

console.log(prices);
console.log(taxedPrices);
