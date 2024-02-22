const balance = 798
console.log(balance);

const score = new Number(89)
console.log(score);

console.log(balance.toString()); //String Conversion
console.log(typeof balance.toString());
console.log(balance.toString().length); //Length of String

console.log(balance.toFixed(2)); // 798 => 798.00 || 57.8236 => 57.82

const tempNumber = 123.8352383
console.log(tempNumber.toPrecision(4)); // 123.8

const number = 1000000
console.log(number.toLocaleString()); // 1000000 => 10,00,000

console.log(Number.MIN_VALUE) // Min Value
console.log(Number.MAX_VALUE); //Max Value
console.log(Number.MAX_SAFE_INTEGER);

console.log(Math.abs(-7)); // Absolute value
console.log(Math.round(4.6)); //Round Off
console.log(Math.ceil(4.2)); // Upper Limit => 5
console.log(Math.floor(4.9)); // Lower Limit => 4
console.log(Math.sqrt(25)); //Scqure Root
console.log(Math.min(2, 3, 6, 4, 4, 6));  // Minimum value Array
console.log(Math.max(2, 3, 6, 4, 4, 6));  // Maximum value Array

console.log(Math.random()); //Random value in 0 to 1 range

console.log(Math.round(Math.random() * 6));

//Random value in between this range
const min = 10;
const  max = 20;
console.log(Math.floor(Math.random()*(max - min + 1)) + min)