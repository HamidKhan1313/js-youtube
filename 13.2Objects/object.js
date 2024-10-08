// declare for object both method are same
//const tinderObject = new Object()
const tinderObject = {}

tinderObject.id = "123abc"
tinderObject.name = "Hamid"
tinderObject.isLoggedin = false

//console.log(tinderObject);

// here we used nested for excess object in a object
const regularuser = {
    email: "Hamid@gmail.com",
    fullname:{
        username:{
            firstname: "Hamid",
            lastname: "Khan"
        }
    }

}
// "?" used for protection if the data are not find in api we use this with operation in future
//console.log(regularuser.fullname.username.firstname);

// marge objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign(obj1, obj2)

//optional "{}" we thought {} as a target and object as a source
//const obj3 = Object.assign({}, obj1, obj2, obj4)

// we also use spreader method to assign objects
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

// array have objects 
const users = [
    {
        id : 1,
        email : "hamid@gmail.com"
    },
    {

    },
    {

    },
    {

    }
]
users[1].email
console.log(tinderObject);

// now  we store object value as a array and use in a future projects 
console.log(Object.keys(tinderObject));
console.log(Object.values(tinderObject));

// this "Object.entries" is used in very few places
//console.log(Object.entries(tinderObject));

// we check tinderobject have exesting values
console.log(tinderObject.hasOwnProperty('isLoggedin'));


// we study further about object when we get knowledge about it
