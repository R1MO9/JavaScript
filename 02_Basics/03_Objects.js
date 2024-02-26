//object literals
const mySym = Symbol("key1")

const user = {
    name: "RIMON",
    age : "20,",
    location : "Kolkata",
    isLoggedIn: false,
    email : "rimon@google.com",
    [mySym] : "17023912739"
}

console.log(user.name);
console.log(user["email"]);
console.log(user[mySym]);

//user["name"] = "abdnf"
//console.log(user["name"]);

// Object.freeze(user)
console.log(user);

//user["name"] = "abcdef"
//console.log(user["name"]);

user.greeting = function() {
    console.log(`Hello JavaScript user, ${this.name}`);
}
console.log(user.greeting());