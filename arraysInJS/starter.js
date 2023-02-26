/////////////////////////////////////////////////
//////////////JAVASCRIPT ARRAYS/////////////////
///////////////////////////////////////////////

// const animals = ["monkey", "dog", "cat", "koala", "elephant"];

// animals.push("tiger"); //add to end of array
// animals.push("cow");
// animals.unshift("parrot"); //add to beginning of array
// animals.pop(); //remove element from the end
// animals.shift(); //remove elemet from the beginning
// animals.unshift("llama");
// animals.shift(3); //remove the 3rd item [!!!!!NOT INDEX 3 BUT ITEM 3!!!!!]

// // console.log(animals);

// // const monkey = animals[0];
// // console.log(monkey);
// // console.log(animals[0]);
// // console.log(animals[3]);
// // console.log(animals.length);

// for (let i = 0, j = 0; i < animals.length; i++, j++) {
//   console.log(animals[i], j);
// }

//////////////////////////////////////////////////////////////////
//---- array.at demo ----//

// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.at(3));

// let index = 2;

// console.log(
//   `Using an index of ${index} the item returned is ${array1.at(index)}`
// );

//---- array.concat demo ----//

// const array1 = ['horse', 'rabbit', 'dog', 'bird'];
// const array2 = ['stall', 'hutch', 'kennel', 'cage'];
// const concatArrays = array1.concat(array2);

// console.log(array1);
// console.log(array2);
// console.log(concatArrays);

//---- array.copyWithin demo ----//

// const array0 = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9"];
// console.log(array0);
// console.log("---==---");
// console.log(array0.copyWithin(0, 3, 4));
// console.log("---==---");
// const array1 = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9"];
// console.log(array1);
// console.log("---||---");
// console.log(array1.copyWithin(0, 3));
// console.log("---||---");
// const array2 = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9"];
// console.log(array2);
// console.log("---OO---");
// console.log(array2.copyWithin(-2));
// console.log("---OO---");
// const array3 = ["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9"];
// console.log(array3);
// console.log("---##---");
// console.log(array3.copyWithin(-5, -2));
// console.log("---##---");
