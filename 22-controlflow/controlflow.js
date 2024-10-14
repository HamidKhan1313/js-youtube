// emplement this condition
// if(true){

// }
// not emplement line no 6, 7, and 8
// if(false){

// }

// const isLoggedin = true
// const temperature = 41

// if(2 == "2"){
// console.log("code Excuted");

//  }

//  if(temperature === 41){
//     console.log("Less then 50");
    
//      }
//      else{
//       console.log("temperature is greater than 50");
      
//      }
//      console.log("Excuted");
     

// < , > , <= , >= , == , != , 
// === is use for type check in above example we excute code it excuted but it is not possible that number is equal
// to string thats why we use "===" instead of "=="


// const score = 200

// if(score > 100 ){
//   let power = "fly" // if we use var instead of let or const it give no error but it is against us we need error
//                     // after an if statement
//   console.log(`user power : ${power}`);
  
// }
// console.log(`user power : ${power}`);



// const balance = 1000 
// if (balance > 500) console.log("test"),  // this is implicet scope that are not use "{}" and excute in one "line"
//   console.log("test2");  // this not proper redable code in company 

// if (balance < 500){
//     console.log("less than 500");
    
// }
// else if(balance < 750){
// console.log("less than 750 ");

// }
// else if(balance < 900){
// console.log("less than 900");

// }
// else{
//     console.log("less than 1200");
    
// }

const userLoggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true
// && is used for both condition is true
if(userLoggedin && debitcard){
console.log("allow to buy courses");

}

// || is used for either one condition is true
if (loggedinfromemail || loggedinfromgoogle){
console.log("user logged in ");

}