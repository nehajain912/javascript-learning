class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher('chai','chai@email.com','123');
// chai.addCourse();
const masalachai = new user('neha');
masalachai.logMe();
// masalachai.addCourse();
const tea = new teacher('Special Tea','sTea@gmail.com','123');
tea.logMe();
console.log(chai instanceof teacher);
console.log(chai instanceof user);
console.log(masalachai instanceof user);


