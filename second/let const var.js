const accountid = 234445
let accountemail = "Hamidkhantanol@gmail.com"
var accountpassword = "12345678"
accountcity = "Abbottabad"
let accountstate;

//accountid = 2 // not allowed
accountemail = "hc@gmail.com"
accountpassword = 212121
accountcity = "Islamabad"
console.log(accountid)
console.table([accountid, accountemail, accountpassword, accountcity, accountstate]);

/*
prefer not to use var because  of issue in block scope and functional scope
*/
