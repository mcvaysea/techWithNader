
/////////////////////////////////////////
//////////////FOR LOOPS/////////////////
///////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
/* 
console.log(`<=== for loops ===>`);

for (let i = 0; i < 10; i++) {
    console.log(i);
}
 */

//////////////////////////////////////////////////////////////////////////////

/* 
console.log(`<=== for loop with multiple initializer ===>`);

for (let str = 'monkey' , i = 1; str !== 'banana'; i++) {
    if (i === 15) {
        str = 'banana';
    }
    console.log(`${i} ${str}`);
}
console.log(`you are all done!);
 */

//////////////////////////////////////////////////////////////////////////////
/* 
console.log(`<=== for loop with break ===>`);

for (let i = 0; i < 100; i += 5) {
    console.log(i);

    if (i === 25) {
        console.log('ha...goatcha!');
        console.log('time for a break' ,i);
        break;
    }
    console.log("This is loop", i);
}
 */



//////////////////////////////////////////////////////////////////////////////

console.log(`<=== for loop with continue ===>`);

for (let i = 0; i < 1000; i += 10) {
    console.log(i);

    if (i === 20) {
        i += 200;
        continue;
    }
    console.log('Loop number', i);
    if (i === 600) {
        break;
    }
}







