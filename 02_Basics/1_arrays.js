// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7) // adds element at the end
// myArr.pop() // removes element from the end

// myArr.unshift(9) // adds element at the beginning
// myArr.shift() // removes element from the beginning

// console.log(myArr.includes(9)); // returns '-1' if element is not present in array
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts array to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A: ", myArr); // [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) // does not remove elements from the array

console.log(myn1); // [ 1, 2 ]
console.log("\nB: ", myArr); // [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3) // removes specified elements from the array
console.log("\nC: ", myArr); // [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ]