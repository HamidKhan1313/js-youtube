const myNums = [1, 2, 3, 4, 5, 6, 7, 8]

// when we use scope we have to use "return"
// const newNums = myNums.map((num) => {return num + 10})

// we use method chaining to use two three method at a time
const newNums = myNums
              .map((num) => num * 10)
              .map((num) => num + 1)
              .filter((num) => num >= 30)

console.log(newNums);
