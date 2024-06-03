const coding = ["js", "ruby", "java", "python", "cpp"]

// 'forEach' is a method that is used to iterate over the elements of an array. It uses a callback function to iterate over the elements of an array which means that it takes a function as an argument and that function is called for each element of the array.
// coding.forEach( function (val){
//     console.log(val);
// } )

// 'forEach' can also be written using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

/*
You can also write the above code in the following way using a named function

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)
*/

// You can also pass the 'index' of the element and the 'array' itself to the callback function
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// 'forEach' can also be used with objectsrrr
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )