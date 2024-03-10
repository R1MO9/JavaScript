const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.map((num) => {
//     return num + 10;
// });

// nums.forEach((num, index, array) => {
//     array[index] = num + 10;
// });

// Chaning
const newNums = nums.map((num) => num*10).map((num) => num + 1).filter((num) => num >= 40) //41, 51, 61, 71, 81, 91, 101
console.log(newNums);