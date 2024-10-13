
// Javascript exution contect below 
// global excution context 
// function excution context
// eval excution context ---> use next in mongoes dbs

// Memory certain phase 
// Excution phase

let val1 = 10
let val2 = 5
function addNum (num1, num2){
let total = num1 + num2
return total
}
let resut1 = addNum(val1, val2)
let result2 = addNum(10, 5)

console.log(result2);

// (1) Global phase ----> this

// (2) Memory phase
// (i)   val1 = undefined
// (ii)  val2 = undefined
// (iii) val3 = defination
// (iv) result 1 = undefined
// (v)   result 2 = undefined

// (3) Excution phase
// (i)    val1 = 10
// (ii)   val2 = 5
// (iii)  resut1 = 15

// add number ---> New variable enviroment + Excution thread
//Memory phase
// (i) va1l = Undefined
// (ii) val2 = Undefined
// (iii) total = Undefined
//Excution phase
//(i)   Num1 = 10
//(ii)  Num2 = 5
//(iii) Total = 15

// whenever excution contect will be completed it become delete as well