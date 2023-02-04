// Simple example for making methods in a Parent class which is extended by the Child class. 

class Admin {
    role = "Admin";

    // creates a method 
    setWork() {
        return `Your role is ${this.role}`;
    }
}

class User extends Admin {
    getWork() {
        return `${this.setWork()}`
    }
}

let user1 = new User();

console.log(user1.getWork());