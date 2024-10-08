// constructer(object ) --> singleton
// literals (0bject) ---> nt singletn

// singleton
//object.create


//Object literals

const mysym = Symbol("key1")  // symbol presentation is important for interview 
const jsUser = {
    name: "Hamid",
    "Full Name": "Hamid Khan",
    age : 24,
    [mysym]: "mykey1",  
    email: "Hamidkhantanol@gmail.com",
    location: "Abbottabad",
    isLoggedin: false,
    lastLoggedin: ["monday", "Tuesday"]
    
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// it cannot excess through "." so we give it "[]" to excess
// console.log(jsUser["Full Name"]);

// here symbol give datatype of string
// Imortant for interview ---> symbol is always write in "[]" form 
// console.log(typeof jsUser[mysym]);
jsUser.email = "Hamid@chatgpt.com"

// we use freeze operation with object which cannot changes further in program
//Object.freeze(jsUser)
jsUser.email = "Hamid@microsoft.com"
jsUser["Full Name"] = "Waleed Khan"
// console.log(jsUser)
jsUser.greeting = function () {
    console.log("Hello JS User");
    
}
jsUser.greeting2 = function () {
    console.log(`Hello JS User, ${this.name}`);
    
}
// 
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


