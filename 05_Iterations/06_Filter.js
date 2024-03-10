// const coding = ['c', 'c++', 'java', 'python', 'javascript', 'ruby', 'php', 'go', 'swift', 'kotlin', 'rust']

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item //forEach Loop returns nothing
// })
// console.log(values);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArr = arr.filter((num) => num > 4)

//Beacause of the curly braces, new Scope, we need to use the 'return' keyword
const newArr2 = arr.filter((num) => {
    return num > 4
})

console.log(newArr);
console.log(newArr2);

const newNums = []
arr.forEach((num) => {
    if(num > 4){
        return newNums.push(num)
    }
})
console.log(newNums);


const books = [
    {
        title: 'Clean Code', genre: 'Software Development', pages: 464, publish: 2008, author: 'Robert C. Martin'
    },
    {
        title: 'Atomic Habits', genre: 'Self-Help', pages: 319, publish: 2018, author: 'James Clear'
    },
    {
        title: 'The Pragmatic Programmer', genre: 'Software Development', pages: 352, publish: 1999, author: 'Andrew Hunt'
    },
    {
        title: 'The Alchemist', genre: 'Novel', pages: 208, publish: 1988, author: 'Paulo Coelho'
    },
    {
        title: 'The Lean Startup', genre: 'Business', pages: 336, publish: 2011, author: 'Eric Ries'
    }
]

// const newBooks = books.filter((book) => {
//     return book.publish >= 2000
// })
//console.log(newBooks);

const engnrBooks = books.filter((book) => {
    return book.genre === 'Software Development'
})
console.log(engnrBooks);