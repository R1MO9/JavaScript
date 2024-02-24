//Arrays in JavaScript are resizeable
//In javaScript storing different type of data in an array is possible
//0-based Indexing
const arr = [7, 4, 8, 0, 2, 6, "JavaScript"];

console.log(arr[2]);

//******Arrays Methods******

const num = new Array(1, 2, 3, 4, 5);
num.push(8)//adds element at last
console.log(num);
num.pop() //removes element from last
console.log(num);

num.unshift(0) //adds element at first
console.log(num);
num.shift() //removes elements from first
console.log(num);

console.log(num.includes(8)); //True or False

console.log(num.indexOf(89)); //-1 or 0-based index

console.log(num.join()); //Converts the array into string

//Slice & Splice
const num2  = [0, 1, 2, 3, 4, 5]
console.log("A ", num2)

console.log(num2.slice(1, 3));
console.log("B ", num2);

console.log(num2.splice(1, 3));
console.log("C ", num2);