// // object literal
const user = {
   username: "HamidKhan",
    loginCount: 7,
    signedIn: true,

     getUserDetails: function(){
     //console.log("Got user detail from database");
    //console.log(`username: ${this.username}`);

      console.log(this);
      
      
       
        
     }
 }
//console.log(user.username)
//console.log(user.getUserDetails())
//console.log(this);

function User(username, loginCount, isloggedIn){
  this.username = username
  this.loginCount = loginCount
  this.isloggedIn = isloggedIn

  this.greetings = function(){
    console.log(`welcome ${this.username}`);
    
  }
  return this
}
const Userone = new User("hamidKhan", 7, true)
const Usertwo = new User("WaleedKhan", 9, false)
console.log(Userone);
// console.log(Usertwo);

// also study this Mmd web doc

