// Constuctor methode(Singleton)
// const user = new Object()

const webUser = {
    id: 7140620783,
    name: "Harshit Meheta",
    address: "Kolkata, India",
    isLoggedIn: false
}
webUser.password = "ohws4y8hd8ef"
//console.log(webUser);
// console.log(Object.keys(webUser));
// console.log(Object.values(webUser));
// console.log(Object.entries(webUser));

const regularUser = {
    email: "harshit@gmail.com",
    fullName: {
        fName: "Harshit",
        lName: "Meheta"
    }
}
// console.log(regularUser.fullName.fName);



const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
// Merging two objects into a empty object
// Here target= {}; source = obj1 , obj2
const obj3 = Object.assign({}, obj1, obj2)
console.log((obj3));
console.log(obj1);

// Merging two objects into obj1
// Here target = obj1; source = obj1 , obj2
const obj4 = Object.assign(obj1, obj2)
console.log((obj3));
console.log(obj1);

console.log({...obj1, ...obj2}); //Sprade


//data from Database
const users = [
    {
        id:  2354002370,
        name: "gfewsg"
    },
    {
        id:  2354002371,
        name: "adhgah"
    },
    {
        id:  2354002372,
        name: "aser rwa"
    },
    {
        id:  2354002373,
        name: "wq  QUWE"
    }
]
console.log(users[1].id);