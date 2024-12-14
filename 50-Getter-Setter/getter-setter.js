class user {
constructor(email, password){
this.email = email
this.password = password

  }
  get email(){
 return this._email.toUpperCase()
  }

  set email(value){
 this._email = value
  }

  get password(){
 return `${this._password}hamid`
  }
  set password(value){
 // this.password = value.toUpperCase()  // here is problem that constructer is set value as setter also so we have to correct in next line and comment this
 this._password = value

}
}

const hamid = new user("hamid@gmail.com", "abc")
console.log(hamid.email);
