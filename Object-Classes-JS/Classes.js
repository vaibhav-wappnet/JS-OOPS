class Details {
    // constructor method
    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }

    // various methods
    getDetails() {
        return (`Name : ${this.name} ---- Email : ${this.email} ---- Address : ${this.address}`);
    }

    getTimings() {
        let date = new Date();
        return (`Created on Date : ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);
    }

    getAge(age) {
        this.age = age;
        return `Account Accessed by Name : ${this.name} ---- Age : ${this.age}`
    }
}

let user1 = new Details("Vaibhav", "ok1@test.com" , "B/21, west street");
let user2 = new Details("Kendall", "ok2@test.com" , "California");
let user3 = new Details("Millie", "ok2@test.com" , "LA");

console.log("-------------------------------------------------------------------------------------------");
console.log(user1.getTimings());
console.log(user1.getAge(21));
console.log(user1.getDetails());
console.log(`${user1.name} ---- ${user1.email} ---- ${user1.address}`);
console.log("-------------------------------------------------------------------------------------------");
console.log(user2.getTimings());
console.log(user2.getAge(30));
console.log(user2.getDetails());
console.log(`${user2.name} ---- ${user2.email} ---- ${user2.address}`);
console.log("-------------------------------------------------------------------------------------------");
console.log(user3.getTimings());
console.log(user3.getAge(20));
console.log(user3.getDetails());
console.log(`${user3.name} ---- ${user3.email} ---- ${user3.address}`);
console.log("-------------------------------------------------------------------------------------------");
