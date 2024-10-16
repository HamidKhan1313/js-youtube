const userEmail = "hamid@gmail.com"
if (userEmail) {
    // console.log("Got Email Adress");
    
}
else{
    // console.log("Dont have user email");
    
}

// falsy value important for interview
// false, 0, -0, BigInt(0n), "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}
if (userEmail.length === 15) {        // here useremail.length match with const userEmail = 
                                       //  "hamid@gmail.com"
    
    // console.log("array is empty");
    
}
// for check objects 
const emptyObject = {}
if(Object.keys(emptyObject).length === 0 ){
// console.log("object is empty");

}
 
// Syntax ----> Nullish coalescing operater (??) : null  undefined
// use espachially in database or firebase when we send value to database
let val1;
// val1 = 5 ?? 10
//check sefty in the basis of null / also first value is only assign 
//val1 = null ?? 10
val1 = undefined ?? 10 ?? 10
// console.log(val1);

// Terinary operrator
  //Syntax ---> condition ? true : false;
  const iceTeaprice = 100
  iceTeaprice >= 80 ?  console.log("less than 80") : console.log("more than 80");
  
  