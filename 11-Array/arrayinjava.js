
// shallow copy
// deep copy

const myArr = [0, 1, 2, 3, 4, 5]
 const myHeros = ["Superman", "Spiderman", "Ironman", "Batman", "Mrbean"]

// automatic convert square brackets
 const myArr2 = new Array(1, 2, 3)
//  console.log(myArr[1])

// array methods  -> push 
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

// array methods  -> pop
// myArr.pop()
// console.log(myArr);

// array methods  -> unshift
//  myArr.unshift(9)
// console.log(myArr);


// array methods  -> shift
// myArr.shift()


// quetionare method
// console.log(myArr.includes(9));
// console.log(myArr.includes(3));
// console.log(myArr);

// join method 
const newArr = myArr.join()
// console.log(newArr);

// object converted into string 
// console.log(typeof newArr);

// slice ---> slice we take (1,3) which incude value b/w (1 to 3) i.e [1,2]
console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log( myn1)
console.log("B", myArr);


// splice --> we take value  (1,3 ) which give us value b/w 1 to 3 i.e [1,2,3]
// differece b/w slice and splice is splice cut portion from orignal array while slice not cut array
const myn2 = myArr.splice(1,3)
console.log("c", myArr);

console.log(myn2);






