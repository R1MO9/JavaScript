if(true) {
    let a = 10
    const b = 20
    var c = 30 //var is declared in this scope but var is also accessable outside of this scope
}
// console.log(a);
// console.log(b);
console.log(c);


if(true) {
    const name = 'Rimon'
    if(name === 'Rimon') {
        title = ' Das'
        console.log(`${name + title}`);
    }
}

/*      Interesting      */
addOne(5)
function addOne(num) {
    return num + 1;
}

// addTwo(5) //this is not accessable here
const addTwo = function(num) {
    return num + 2;
}
addTwo(5)