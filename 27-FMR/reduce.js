// it is important method use in shopping card to add numbers
const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function (accumlater, currentval){
// console.log(`accumlater: ${accumlater} and currentval ${currentval}`);
// return accumlater + currentval
// }, 0)
const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 199
    },
    {
        itemname: "mobile dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price: 2999
    }
]
const priceTopay= shoppingCart.reduce((acc, item ) => acc + item.price, 0)
console.log(priceTopay);

