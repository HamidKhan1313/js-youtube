const my_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "Flash", "Bateman"]
//my_heros.push(dc_heros)
// console.log(my_heros);
// console.log(my_heros[3][0])

// we use "concat" so we use new array to store concat
//  const newArr = my_heros.concat(dc_heros)
// console.log(newArr);

// we use "spread operation "" which is easyway to spread two arrays
// const my_new_heros =[...my_heros, ...my_heros]
// console.log(my_new_heros);

// if we have many arary and array into array we use ooperation "flat" and give him value "infinty"
const another_array = [1,2,3,[4,5],6,7,[3,4],8,[6,7], 9]
const another_real_array = another_array.flat(Infinity)
console.log(another_real_array);


// for data scraping when we colllect data from another webside having diff formate we need "array"
// we use "isArray" method to find value and convert through "from" value
console.log(Array.isArray("Hamid"));
console.log(Array.from("Hamid"));

// if it cannot make array it give us empty 
console.log(Array.from({name : "Hamid"}));  // intersting


// we use "Array.of"
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

