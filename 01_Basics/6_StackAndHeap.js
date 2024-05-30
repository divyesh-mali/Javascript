// Stack memory is used to store local variables and function call. Heap memory is used to store objects and arrays.
// Stack memory stores the elemnts of primitive data types and Heap memory stores the reference of the elements of primitive data types.
// Heap memory store the elemts of non primitive data types.


// This is pass by value
let myName = "Divyesh";
let nickName = myName;
nickName = "Divu"

console.log(myName);
console.log(nickName);

// This is pass by reference
// Example 1

let myHeros
let superHeros = ["shaktiman", "naagraj", "doga"];
myHeros = superHeros;
myHeros[0] = "Spiderman";

console.log(superHeros);
console.log(myHeros);

// Example 2
let user1 = {
    name: "Divyesh",
    age: 22,
}

let user2 = user1;
user2.name = "Divu";

console.log(user1);