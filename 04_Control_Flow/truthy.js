// Truthy and Falsy values in JavaScript are values that are considered true or false when encountered in a boolean context.

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// How to check truthy value of array :
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// How to check truthy value of object :
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) // This will basically return array of keys of object. So, hence if its length i.e. array's length is 0, then object is empty.
{
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// It is used to check the null or undefined values. Its applcation is similar to OR operator.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 // It will return the first non-null value. Output : 10

console.log(val1);


//------------------------------------------------------------------

// Terniary Operator : It is different from Nullish Coalescing Operator. It is used to check the condition and return the value based on the condition.
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")