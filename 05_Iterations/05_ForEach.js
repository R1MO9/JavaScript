const arr = ['c', 'c++', 'java', 'python', 'javascript', 'ruby', 'php', 'go', 'swift', 'kotlin', 'rust']

// arr.forEach(element => {
//     console.log(element); 
// });

// arr.forEach(function(value) {
//     console.log(value);
// })

// arr.forEach((value, index, array) => {
//     console.log(value, index, array); // value, index, array
// })

const coding = [
    {
        language: "c",
        year: 1972
    },
    {
        language: "c++",
        year: 1983
    },
    {
        language: "java",
        year: 1995
    },
    {
        language: "python",
        year: 1991
    }
]

coding.forEach((index) => {
    console.log(`${index.language} => ${index.year}`);
})