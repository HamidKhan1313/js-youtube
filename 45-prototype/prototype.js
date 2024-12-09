// let myname = "Hamid"
// let mychannel = 'chai'

// console.log(myname.truelength);


let myHeros = ['thor', 'spiderman']

let heropower = {
  thor: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
    
  }
}
Object.prototype.hamid = function(){
    console.log(`hamid is present in all objects`);
    
}
Array.prototype.hyhamid = function(){
    console.log(`hamid says hello`);
    
}

// heropower.hamid()

// myHeros.hamid()
// myHeros.hyhamid()

// heropower.hyhamid()


// inheritence

const user = {
    name: 'Hamid', 
    email: 'Hamidkhantanol@gmail.com'
}

const Teacher = {
    makevideo:  true
}

const teachingsupport = {
    isAvalible: false
}

const TASupport = {
    makeAssigment: 'js Assigment',
    fullTime: true,

    __proto__: teachingsupport
}
Teacher.__proto__ = user

// modern syntex
Object.setPrototypeOf(teachingsupport, Teacher)

let anotherUsername = 'chai or code'

String.prototype.truelength = function(){
     console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
    
   
}
anotherUsername.truelength()
'hamid'.truelength()
'icecube'.truelength()

