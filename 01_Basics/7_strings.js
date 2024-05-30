/*
Summary :

1. Here we've learnt about old & modern way of writing strings.
2. We've also learnt about some string methods like charAt, indexOf, substring, slice, trim, replace, includes, split etc.
3. There are many more methods. Refer to MDN docs for more info.
*/

const name = "hitesh"
const repoCount = 50

// This is old method of writing strings & is not used now much
// console.log(name + repoCount + " Value");

// This is modern method of writing strings & is used now
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));