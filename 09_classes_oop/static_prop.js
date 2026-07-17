class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

// const neha = new user('Neha');
// console.log(neha.createId());

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email= email;
    }


}

const iphone = new teacher('neha','n@gmail.com');
iphone.logMe();
console.log(iphone.createId());
