//Immediately Invoked Function Expression (IIFE)
// IIFE is a function that runs as soon as it is defined.
// It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts.
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.
// Semi colon is necessary to terminate the statement

//IIFE
(function sayHello() {
    console.log('DATABASE CONNECTED');
})();
// sayHello();


//Simple Function
function attendence(name) {
    console.log(`${name}, attended the class`);
}
attendence('Aditya Nath');
//Arrow Function
const attendence2 = (name) => {
    console.log(`${name}, attended the class`);
}
attendence('Aditya Nath');

//IIFE in Normal Function or Named IIFE
(function(name) {
    console.log(`${name}, attended the class`);
})('Aditya Nath');

//IIFE in Arrow Function or Unnamed IIFE
((name) => {
    console.log(`${name}, attended the class`);
})('Aditya Nath');