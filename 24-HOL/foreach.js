const coding = ["js", "rubby", "python", "html", "css"]

// call back function have not a name 
// coding.forEach( function (val){
//     console.log(val);
    
// })

// arrow function // we use not a keyword of function here 
// coding.forEach(  (item) => {
//     console.log(item);
    
// })


// we use refernce of function not a print
// function printme (item){
// console.log(item);

// }
// coding.forEach(printme)

// we use item index and arr -----> important for interview
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]
myCoding.forEach((item) => {
console.log(item.languageName);

})