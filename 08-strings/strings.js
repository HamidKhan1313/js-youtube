//const name = "Hamid"
//const repoCount = 50
//console.log(name + repoCount + " value")

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// another way to declare string

const gameName = new String("WaleedKhan.")

//console.log(gameName);


//excess key value pairs
//console.log(gameName[0])

// excess prototype through method 2
//console.log(gameName.__proto__);

// use to find total length of string
//console.log(gameName.length);

// use to find the position of character it start from 0-17
//
//console.log(gameName.charAt(17));

// use for convert all string to uppercase
//console.log(gameName.toUpperCase());

// for position find character also it start from (0) position so it consider from start Like
// if we consider ("Hamid Khan Is King " we find indexof (i) it give us only 3)
//console.log(gameName.indexOf('i'));


// now first we insilize string with variabe and then convert into substring
//const newString = gameName.substring(0, 11)
//console.log(newString);

// we give slice also negative value it give us nill value on 0 index
const anotherString = gameName.slice(-5 ,-1)
console.log(anotherString);

