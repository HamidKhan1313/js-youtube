// dates

let myDate = new Date()
//console.log(myDate);

// convert it to string

// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate)


// in java month start from 0 
//let myCreateddate = new Date(2024, 11, 24, 10, 5)


// proper formate
let myCreateddate = new Date("2024-01-20")
//console.log(myCreateddate);
//console.log(myCreateddate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreateddate.getTime())


// result in milisecond now we convert it to second
// console.log(Date.now()/1000)
// console.log(Math.floor((Date.now()/1000)));

// for find exect solution 
let myDateis = (new Date)
// console.log(myDateis.getMonth() + 1);
// console.log(myDateis.getDay());
myDateis.toLocaleString('default',{
    weekday: "short"
}

)



