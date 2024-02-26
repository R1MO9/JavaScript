function myName(){
    console.log("R");
    console.log("I");
    console.log("M");
    console.log("O");
    console.log("N");
}

// myName()

function addTwoNumbers(num1, num2){
    return (num1 + num2)
}
let result = addTwoNumbers(6, 3)
console.log(result);

function loginUserMessage(username) {
    if(username === undefined) {
        return "Please enter a username"
    } else {
        return `${username}, just logged in`
    }
}
console.log(loginUserMessage("rimon"))

function shoppingCart(...value) {// Rest
    return value
}
console.log(shoppingCart(100, 200, 500));
