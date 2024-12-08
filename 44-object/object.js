
// function is a function and also function will be a object
function multiplyBy5(num){
return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
this.username = username
this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
// importance of new is understand when whe give createUser value to chai
const chai = new createUser('chai', 25)
const tea = createUser('tea', 250)

chai.printMe()

// here is a link of chai and code video for interview use of new keyword and importance of new starts: 23:29min
// https://www.youtube.com/watch?v=uMI5cNeHTOc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=43 

