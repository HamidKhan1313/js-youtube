
// whenever nested function child function can excess parent function
function one(){
    const userName = "Hamid Khan"

    function two(){
        const website = "youtube"
       // console.log(userName);
        
    }
    //this console.log give us erroe becaues this is already excute within function
   // console.log(website);
    two()
    
}
one()

// second method
if (true) {
    const username = "Waleed Khan"
    if (username === "Waleed Khan") {
        const websites = " youtube"
       // console.log(username + websites);
        
    }
   // console.log(website);
    
}
//console.log(userName);

console.log (addOne(5))
function addOne(num){
    return num + 1
}

// cannot initiaize befor function that are clear in future through concept hoisting
addTwo(5)
const addTwo = function(num){
return num + 2
}
