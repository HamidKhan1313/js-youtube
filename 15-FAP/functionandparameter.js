// if we make def of function it contain "()" called parameters and when we call the function "()" called arguments


function myname(){
console.log("H");
console.log("A");
console.log("M");
console.log("I");
console.log("D");
}
// () --> for excution myname is used as a reference
//myname()


// add two numbers
// function addTwonumbers(number1, number2){
//     console.log(number1 + number2)
// }

// if we excute any value after return it cannot be excuted into output like 
function addTwonumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Hamid");
    // return result
    // console.log("Hamid");
 return number1 + number2   
}
// no value pass through argument result will be "NaN"
//addTwonumbers()

// we give value to argument
const result = addTwonumbers(3, 4)
// console.log(result);
// console.log("result:", result);


// here we take return value through "``" and store argument value through "console.log"
// here we use if statement to check wether username is "defined" or "undefined" if undefined give the name in output result
// function userLoggedin(username){
//     if(username === undefined){
//      console.log("Plese enter the username");
//      return
     
//      }
//     return `${username} is just logged in`
// }

// "(!)"here (!username) use in mosty "react" or "reactnative" basically express that is "username is equal to null"
function userLoggedin(username = ("Hamid")){
    if(!username){
     console.log("Plese enter the username");
     return
     
     }
    return `${username} is just logged in`
}
//console.log(userLoggedin("Hamid"))

//give value "undefine because value is not define yut in output"
// (username = ("Hamid") is replace by ("Waleed") in result or output
console.log(userLoggedin("Waleed"))

