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
.finally(()=> console.log('promise is either resolve are rejected'))

// for error handling use async
const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!resolve) {
            resolve({username: "Java Script", password: 123})
        
        }else{
            reject('Error: JS went wrong')
        }
        }, 1000)
})

async function consumePromisefive(){
    try {
        const response = await promisefive
        console.log(response);
    
     } catch (error) {
        console.log(error);
        
    }
    
}
consumePromisefive()

// next lecture for study


// async function getAllusers(){
// try {
    
//         const response = await fetch('https://api.github.com/users/hamidkhan1313')
//         const data = await response.json()
//         console.log(data);
        
        
//     } catch (error) {
//     console.log('E:', error);
//     }
// }
//   getAllusers()

fetch('https://api.github.com/users/hamidkhan1313')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))
