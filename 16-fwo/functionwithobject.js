// shopify custumer add list of item so we don't know about parameter that who much parameter comes
// always name function with understanding to other person's


// rest operater use "..."
// function calculatecartprice(...num1){
//      return num1
//  }
// value1, value2,

// if we use value1 that compare with 200 and we take value 2 it compare with value2 and ret of goes to "..num1"
// Now "Rest Operater" ---> (value1, value2, ...num1) is not working have some troubleshooter occurs
function calculatecartprice(value1, value2, ...num1){
    return num1
}

console.log(calculatecartprice(200, 300, 400, 500))

// rest operator and spread operator are same work but both are diff in the use case 

// take an object
const user = {
     userName : "Hamid",
     Rollno : "F20-0152",
     marks : 700
}
function handeObject(anyobject){
console.log(`username is ${anyobject.userName} and his rollno is ${anyobject.Rollno}`);

}
handeObject(user)

// we can pass object after log as well
// handeObject({
//     username: "Hamid",
//     rollno : 2346

// })
const myNewarray = [200, 300, 400, 500]

function returnSecondvalue(getArray){
       return getArray[1]
}
//console.log(returnSecondvalue(myNewarray));

// we pass array through put array in output
console.log(returnSecondvalue([200, 400, 500, 700]));
