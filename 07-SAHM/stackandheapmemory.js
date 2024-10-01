// Stack (primitive| it give copy  )  heap (non-primitive | it gives reference ) 
let myYoutubename = "HamidKhan"
let anotherName =  myYoutubename
anotherName = "chaiorcode"
//console.log(myYoutubename);

//console.log(anotherName);

let userOne = {
    email : "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "Hamid@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);  // it updates both consoe.log value with the 2nd email ("hamid@gmail.com")
