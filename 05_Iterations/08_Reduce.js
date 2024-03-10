const arr = [1, 2, 3, 4]
const total = arr.reduce((acc, curValue) => {
    console.log(`accumulator: ${acc}, currentValue: ${curValue}`);
    return acc + curValue
}, 0)

console.log(total);

const shopingCart= [
    {
        product: 'laptop', price: 100000
    },
    {
        product: 'smartphone', price: 50000
    },
    {
        product: 'headphones', price: 10000
    },
    {
        product: 'keyboard', price: 5000
    }
]
const orderValue = shopingCart.reduce((acc, item) => {return acc + item.price}, 0)
console.log(orderValue);