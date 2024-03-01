//Array Specific Loops
[{}, {}, {}]
const arr = [1, 2, 3, 5, 78, 345, 353, 32]

for (const i of arr) {
    console.log(i);
}

const chars = "Hello-World!"

for (const char of chars) {
    console.log(char);
}



//Maps
const map = new Map()
map.set("India", 45367)
map.set("USA", 1)
map.set("France", 33)
map.set("Germany", 49)
map.set("Russia", 7)
map.set("India", 91)

console.log(map);

for (const key of map) {
    console.log(key);// Return the whole array of key-value pair
}

for (const [key, value] of map) {
    console.log(key, ':-', value); // Return the key-value pair
}

// const obj = {
//     name: "Ankan",
//     score: 90,
//     address: "Noida"
// }
// for (const i of obj) {
//     console.log(i); // Error: Object is not iterable
// }