// global scope outside the if loop 
var c = 300 // this var cannot print because of loop var is decleared 
let a = 300


// block scope are all if loop  /the value inside the scope cannot go outside 
if (true) {
    let a = 10
    const b = 20
    var   c = 30  // avoid by many people because it taken input without any decleration in the "result"
    console.log("Inner:", a);
    
}


console.log(a); 
//console.log(b);
//console.log(c);


