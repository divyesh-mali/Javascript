/* 
Summary: 
1. Here, we learnt about comparison good & bad practices. 
2. == checks equality & performs type conversion whenever required. But === checks equality strictly without type conversion.
*/

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// It is bad practice to compare string and number in this fashion given below
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true because null is converted to 0. Equality operator works in different way than comparison operator.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);