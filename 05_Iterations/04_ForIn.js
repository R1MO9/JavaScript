const obj = {
    name: "Ankan",
    score: 90,
    address: "Noida"
}
for (const i in obj) {
    console.log(i); // Return the keys of the object
}

for (const key in obj) {
    console.log(key, ':-', obj[key]) // Return the key-value pair;
}

const temp = [6, 7, 8, 9, 10]
for (const i in temp) {
    console.log(i); // Return the index of the array
}

for (const i in temp) {
    console.log(temp[i]); // Return the value of the array
}