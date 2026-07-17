// // ES6
// class user {
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new user('chai','chai@google','123');
// console.log(chai.encryptPassword());
// console.log(chai);
// console.log(chai.changeUserName());


// behind the scence

function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

function user(username,email,password)
{
    this.username=username;
    this.email=email;
    this.password=password;
}

user.prototype.changeuserName = function(){
    return `${this.username.toUpperCase()}`;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
const tea = new user('tea','tea@gmail.com','123');
console.log(tea.encryptPassword());
console.log(tea.changeuserName());