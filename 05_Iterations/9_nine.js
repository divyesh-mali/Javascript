/*
'reduce' method is used to reduce the array to a single value. It takes a callback function as an argument. 
The callback function takes two arguments. The first argument is the accumulator and the second argument is the current value. 
The accumulator is the value that is returned by the function and it is the value that is accumulated over the iterations. 
The second argument is the current value of the array. The reduce method also takes an initial value of the accumulator as an argument. 
The initial value of the accumulator is optional. If the initial value is not provided, then the first element of the array is taken as the initial value of the accumulator. The reduce method returns the final value of the accumulator. 
The reduce method does not change the original array. The reduce method is used to find the sum of all the elements of an array, to find the maximum or minimum value of an array, to find the average of all the elements of an array, to find the total price of all the items in a shopping cart, etc.
*/


const myNums = [1, 2, 3]

// Accumulator is the value that is returned by the function and it is the value that is accumulated over the iterations

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) // 0 is the initial value of the accumulator. First time, acc will be 0 and currval will be 1. So, 0+1 = 1. Next time, acc will be 1 and currval will be 2. So, 1+2 = 3. Next time, acc will be 3 and currval will be 3. So, 3+3 = 6

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // This is the same as the above code. Here, we are using arrow function

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "py course",
        price: 999
    },

    {
        itemName: "mobile dev course",
        price: 5999
    },

    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);