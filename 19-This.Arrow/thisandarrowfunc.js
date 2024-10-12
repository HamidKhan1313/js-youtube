// create object
// here this keyword represend the all value inside the "{}"
let user = {
    userName :"Hamid Khan",
    userid : 2253,

   WelcomeMessage :  function () {
         console.log(`${this.userName} ,  welcome to website `);
        console.log(this);
        
        
    }
}


// user.WelcomeMessage()
// user.userName = "Waleed Khan"
// user.WelcomeMessage()

// this consoe.log contain empty values
 //console.log(this);


//The most  global scope object is  "window" ----> important for interview


// this is not use as  a function when we excess any key
// function yes(){
//     let userName = "Hamid Khan"
//     console.log(this.userName);
    
// }
// yes()

//  let no = function (){
//     let userName = "Hamid Khan"
//      console.log(this.userName);
    
//  }
//  no()


// arrow function syntx
// let alpha =  () => {
//     let userName = "Hamid Khan"
//      console.log(this.userName);
    
//  }
//  no()

 // basic syntx of arrow function
// let addTwo =  (num1, num2) => {
//          return num1 + num2
//  }
//  console.log(addTwo(3, 5));

// implicet return
//let addTwo =  (num1, num2) =>  num1 + num2
//let addTwo =  (num1, num2) =>  (num1 + num2)   // very useful technique in react
let addTwo =  (num1, num2) =>  ({username: "hamid khan"})  

console.log(addTwo(3, 5));
const myarray = [1, 2, 3, 4, 5]

myarray.forEach(() => {})


