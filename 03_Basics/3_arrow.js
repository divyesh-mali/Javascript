const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // Output : {} // It is used to get the global object. Note: For node.js, global environment is 'global' BUT for browser, it is 'window'


/*

NOTE: 
1. Arrow function does not have its own 'this'. It uses the 'this' of the parent function.
2. This keyword is available for object and NOT for any function.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

*/

// WAYS TO WRITE ARROW FUNCTION :-

// 1. Store it in variable ( OR Explcicit return method ) 
//NOTE: When you use curly braces, you need to use 'return' keyword.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// 2. Implicit return method : Here, we do not need to use 'return' keyword. Code after '=>' is returned automatically.
// const addTwo = (num1, num2) =>  num1 + num2

// When you use round brackets, you do not need to use 'return' keyword.
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // Here, we need to use round brackets to return object.


console.log(addTwo(3, 4))




// Extras: forEach method
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()