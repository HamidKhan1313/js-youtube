const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// to string method (convert number to string)
// console.log(balance.toString())

// now we check length after convert number to string
// console.log(balance.toString().length);

// for ecommerce website we fixed some number to show amount to client at 100 value of(3)R(100.000)
// console.log(balance.toFixed(3))

// to precesion use for upto result we need digits(preority before decimals)
const otherNumber = 123.8990
// console.log(otherNumber.toPrecision(3));

// foe understanding of amount 
const hunderds = 1000000
// console.log(hunderds.toLocaleString('en-IN'));  //convert according to indian currency


//+++++++++++++++ MATHS ++++++++++++++++++++++++++++++

//console.log(Math);

// abs convert -values to +values othervise we give +value it become +ive
// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// roundof method use to convert a fixed number
// console.log(Math.round(4.6));

// for convert number to greater fix value we use ceil method // for low value  we use floor value
// console.log(Math.ceil(4.1));
console.log(Math.floor(4.7));

// to find min value andmax value 
// console.log(Math.min(2, 4, 3, 1, 5, 7));
// console.log(Math.max(20, 10, 3, 5, 21, 12));

// it give us random value bw 0 to 1
// console.log(Math.random());

// for value *10 and we have not wanted value 0 so we add +1 and it give value b/w 1-9
//console.log((Math.random()*10) + 1)
//console.log(Math.floor()(Math.random()*10) + 1);
const min = 10
const max = 20
console.log(Math.floor(Math.random() *(max - min + 1) + min))















