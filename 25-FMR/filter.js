// const coding = ["js", "rubby", "python", "html", "css"]

// const values = coding.forEach((item) => {
// console.log(item);


// })
// // the return value for (foreachloop) is always undefined
// console.log(values);

const myNum = [1,2,3,4,5,6, 33, 44]
//if we have not open scope we have not use return that are use below
// const newNums = myNum.filter((num) => num > 4 )

// when we define scope in filter function we have to use return 
const newNums = myNum.filter((num) => {
return num > 4
}) 
console.log(newNums);
