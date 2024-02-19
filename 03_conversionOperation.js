/* let score = "null"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber); */

//"39" => 39
//"68ch" => NaN(Not a Number)
//"True" => 1
//"False" => 0
//Null => 0
//"Null" => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//True

let sb = "0"
let booleanSB = Boolean(sb)// true
console.log(booleanSB);

let ab = undefined
let abString = String(ab)
console.log(typeof abString);
console.log(abString)

/* OPERATIONS */
console.log(2+2) //4
console.log(2*3) //6
console.log(2-2) //0
console.log(2%2) //0
console.log(2/2) //1
console.log(2**3) //8

let str1 = "Rupankar"
let str2= "(R1MO9)"
console.log(str1 + str2)

console.log("1" + 2)// 12
console.log(1 + "2")// 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") //32
console.log("1" + (2 + 2)) //14

console.log(2+true); //3