// for (let index = 0; index < 10; index++) {
//     if(index == 5) console.log("5"), index++;
//     console.log(index);
// }

// for(let i = 1; i <= 10; i++) {
//     for(let j = 1; j <= 10; j++) {
//         //console.log(i + " X " + j  + " = " + i*j);
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
//     console.log();
// }


let arr = [1, 2, 3, 4, 5, 6, 7, {name: "Ankan", score: 90, address: "Noida"}]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}

// Break
// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`*****Detected 5*****`);
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }

// Continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`*****Detected 5*****`);
//         continue;
//     }
//     console.log(`value of i is ${index}`);
// }