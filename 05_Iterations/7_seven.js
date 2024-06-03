const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// This is used to map the elements of an array and return a new array with the modified elements
// const newNums = myNumers.map( (num) => { return num + 10})


// This is called as chaining of methods. Here, multiple methods are chained together to get the desired output
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums); // Output : [ 41, 51, 61, 71, 81, 91, 101 ]