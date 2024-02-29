//Operators
// <, >, <=, >=, ==, !=, ===, !==, &&, ||, !, ?
// == checks only value
// === checks value and data type

// if else
a = 2;
if(a <= 2) {
    console.log("a is less than or equal to 2");
} else {
    console.log("a is greater than 2");
}

// Nullish Coalescing Operator (??) : null or undefined
let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

let val2;
val2 = null ?? 10;
console.log(val2); // 10

let val3;
val3 = undefined ?? 15;
console.log(val3); // 15

let val4;
val4 = null ?? 0 ?? 20;
console.log(val4); // 0

// Ternary Operator
// condition ? true : false
let age = 18;
let status = (age >= 18) ? "Adult" : "Child";
console.log(status); // Adult