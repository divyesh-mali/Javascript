const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// 'for in' loop is used to iterate over the keys & values of an object
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

// 'for in' loop can also be used to iterate over the keys (index) & values of an array
for (const key in programming) {
    //console.log(programming[key]);
}

// 'for in' loop can't be used to iterate over the maps because it is not iterable
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }