let Admin = {
    type: "Admin",
    role: "Manage the resources",
    get work() {
        return `Your Work is to give tasks to employees`
    }
}

let Employee = {
    type: "Employee",
    role: "use the resource",
    // here instead of using a normal object value we used get method
    get work() {
        return "Your work is to complete the given tasks"
    }
}

let Data = {
    address: "b/8, California",
    name: "Vaibhav",
    id: 1,
}

let Person = {
    get details() {
        return `Welcome, ${this.name}!\nYou are logged in as ${this.type} with Id ${this.
            id}\nYour Address is ${this.address}.\nYour Role is to ${this.role}\nAnd ${this.work}`
    }
}

console.log("----------------------------------------------------");
Person.__proto__ = Employee;
Data.__proto__ = Employee;
Person.__proto__ = Data;
console.log(Person.details); 
//no need to add parentheses after the details method as it is an object property

console.log("----------------------------------------------------");
Person.__proto__ = Admin;
Data.__proto__ = Admin;
Person.__proto__ = Data;
console.log(Person.details);
//no need to add parentheses after the details method as it is an object property

console.log("----------------------------------------------------");