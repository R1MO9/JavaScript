const sch_friends = ["Ram", "Rohit", "Laxman"]
const cllg_friends = ["Ani", "Kush", "Mainak"]

// sch_friends.push(cllg_friends)
// console.log(sch_friends)  
//output => ["Ram", "Rohit", "Laxman", ["Ani", "Kush", "Mainak"]]

const all_friends = sch_friends.concat(cllg_friends);
console.log(all_friends); //["Ram", "Rohit", "Laxman", "Ani", "Kush", "Mainak"]

const all_friends2 = [...cllg_friends, ...sch_friends] //Sprade
console.log(all_friends2); //["Ram", "Rohit", "Laxman", "Ani", "Kush", "Mainak"]

const temp = [1, 2, 3, [4, 5, [6, 7, 8, [9], 0]]]
console.log(temp.flat(Infinity)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(Array.isArray("Rimon")) // true or false
console.log(Array.from("RIMON")); //['R', 'I', 'M', 'O', 'N']

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3)) //[100, 200, 300]