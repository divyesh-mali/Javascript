// So, what is the difference between 'var', 'let' and 'const'?

//var c = 300 // If you declare variable with 'var' keyword or without any keyword then it will be a variable. with global scope
let a = 300 // Thats why always use 'let' or 'const' keyword to declare variable for block scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
// We can use function before declaring it when we declare it in this format
function addone(num){
    return num + 1
}


// This method of declaring function is also callled as expression method.
// Here, we cannot use the function before declaring it.
addTwo(5)
const addTwo = function(num){
    return num + 2
}