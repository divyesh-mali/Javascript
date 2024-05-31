// const tinderUser = new Object() // This is singleton object i.e only one object is created
const tinderUser = {} // This is not singleton object i.e multiple objects can be created

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // Output : hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // This gives nested objects. Output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // This gives combined objects. Output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2} // Spread operator method. Its is used mostly used instead of above two methods. Output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // This is the way to access the properties of an object
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // It is used to get the keys of the object in an array. Output : [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // It is used to get values of object in an array. Output : [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // It is used to get all the methods of object in pair of 'key:value' into an array. Output : [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // It is used to check whether the object has the property or not. Output : true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// This is the json (Javascript Object Notation) notation of data that is fetched from API.
// This data is converted into object and array format and used in the code.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
