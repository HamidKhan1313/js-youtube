const promiseone = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls,crytography,network
    setTimeout(function(){
console.log('Async task is completed');
resolve()
    },1000)
})
promiseone.then(function(){
    console.log('promise is consumed');
    
})
// direct make promise 
new Promise(function(resolve, reject){
setTimeout(function(){
console.log('ASync task 2');
resolve()
}, 1000)

}).then(function(){
    console.log('Async 2 resolved');
    
})
// handle data  through promise
const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
resolve({username: "HamidKhan", email: "hamidkhantanol@gmail.com" })
    }, 1000)
})
promisethree.then(function(user){
console.log(user);

})

const promisefour = new Promise(function(resolve, reject){
setTimeout(function(){
let error = true
if (!resolve) {
    resolve({username: "Ali", email: "Alikhan@gmail.com", password: 123})

}else{
    reject('Error: Something went wrong')
}
}, 1000)
})
 promisefour
 .then((user)=>{
console.log(user);
return user.username
})
.then((username)=> {
console.log(username);

})
.catch(function(error){
    console.log(error);
    
})

