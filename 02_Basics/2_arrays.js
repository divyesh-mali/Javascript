const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // adds array as an element but the array is not flattened i.e it is not converted to a single array. Rather it is added as an element i.e nested array

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash i.e accessing 2nd element of 4th element in nested array

// const allHeros = marvel_heros.concat(dc_heros) // concat method is used to concatenate two arrays where the elements of the second array are added to the first array
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator : it spreads the elements of the array and adds them to the new array

// console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat method is used to flatten the array i.e it converts the nested array to a single array. In parameter we can pass the depth of the nested array. If we pass '0' then it will flatten the array to 1 level. If we pass '1' then it will flatten the array to 2 levels and so on. If we pass 'Infinity' then it will flatten the array to any level
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // Interesting case : its output is '[]' because it is not an array. It is an object. So, it will return an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] : Array.of() method is used to create an array from the arguments passed to it

// Study more about isArray(), Array.from() and Array.of() methods