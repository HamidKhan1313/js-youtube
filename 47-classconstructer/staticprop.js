class user {
    constructor (username){
        this.username = username
    }
    logMe(){
        console.log(`usename:${this.username}`);
        
    }
    createId(){
        return '123'
    }
}
const hamid = new user('hamid')
// console.log(hamid.createId());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher('iphone', 'iphone@gmail.com')
console.log(iphone.createId())

