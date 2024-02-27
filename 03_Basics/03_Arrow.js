const user = {
    name: "Aditya Nath",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage()
user.name = "Sam"
//user.welcomeMessage()
// console.log(this); //In node this returns empty object but in website this returns window funtion



// chai()
// function chai() {
//     let name = "agsd"
//     console.log(this.name); //blank Output
// }


const addTwo = (num1 , num2) => { //Explicit Arraow function
    return num1 + num2;
}
console.log(addTwo(3, 45));

const addTwob = (num1, num2) => num1 + num2 //Implicit Arrow Function
console.log(addTwob(7,23));