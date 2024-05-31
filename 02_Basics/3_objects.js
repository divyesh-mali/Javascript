/*
There are 3 ways to create objects in JS : 
1. Object literals
2. Object.create
3. Constructor function

*/

// singleton
// Object.create

// object literals

// This is the way to create an object in JS
const mySym = Symbol("key1")

// This is the way to create an object in JS. It store data in 'key:value' pair
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// These are the ways to access the properties of an object
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // This method is used to freeze the object i.e we cannot change the properties of the object
JsUser.email = "hitesh@microsoft.com" // hence, this will not work because the object is frozen
// console.log(JsUser); 

// Here, 'greeting' userdefined method of JsUser object. 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());