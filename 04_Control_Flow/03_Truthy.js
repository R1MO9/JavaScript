userEmail = "user@gmail.com"
if(userEmail) {
    console.log("Got email from user");
} else {
    console.log("No email from user");
}

// falsy values
// false, 0, -0, "", null, undefined, NaN, BigInt(0n)

// truthy values
// true, 1, -1, "0", "false", [], {}, function(){}, BigInt(1n)

const obj = {}
if (Object.keys(obj).length == 0) {
    console.log("OBJECT IS EMPTY");
}