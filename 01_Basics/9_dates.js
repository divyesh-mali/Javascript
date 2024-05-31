/* Summary:
1. Javascript has Date object to work with dates.
2. Date object and its properties and methods.
3. We can create date object using new Date() constructor.
*/


/*
let date = new Date()
console.log(date) // 2021-07-07T07:00:00.000Z
console.log(date.toString()) // Wed Jul 07 2021 12:30:00 GMT+0530 (India Standard Time)
console.log(date.toLocaleString)  // [Function: toLocaleString]
console.log(date.toDateString()) // Wed Jul 07 2021
console.log(typeof date) // object
*/


let myDate = new Date(2024, 5, 31) // Month starts with '0' in JavaScript
console.log(myDate.toDateString()) // Mon Jul 01 2024


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})