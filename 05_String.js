const name = "Rupankar"
const repoCount = 10

//Bad habbit
//console.log("My name is " + name  + " and repo count is " + repoCount)

console.log(`My name is ${name} and repo count is ${repoCount}`);

const gameName = new String("ABRA-KA-DABRA")
console.log(gameName.length);
console.log(gameName.at(2));
console.log(gameName.lastIndexOf("B"));
console.log(gameName.indexOf('A'));
console.log(gameName.charAt(2));
console.log(gameName.toLowerCase());

console.log(gameName.substring(0, 4))

const temp = "      uig geluif l cv"
console.log(temp)
console.log(temp.trim());

const url = "http://portfolio.com/rupankar%20das"
console.log(url);
console.log(url.replace('%20', '-'));
console.log(url.includes('io'));

console.log(gameName.split('-'));