class user{
    constructor(username){
        this.username = username
    }
    logMe(){
         console.log(`username is ${this.username}`);
        
    }
}
    class Teacher extends user{
constructor(username, email, password){
    super(username)
    this.email = email
    this.username = username
    this.password = password
    }
    addCourses(){
        console.log(`A new course was added  by ${this.username}`);
        
    }
}
const chai = new Teacher('chai', 'chai@gmai.com', '123')

chai.logMe()
const masalachai = new user('masala chai')
masalachai.logMe()
//console.log(chai === masalachai);
console.log(chai instanceof user);

