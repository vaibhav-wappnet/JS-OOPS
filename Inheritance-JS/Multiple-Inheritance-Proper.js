/*
This Code is an example of implementation of multiple inheritance is implemented in Javascript.
the multiple inheritance is achieved by using the __proto__ keyword.
*/

/* creates Admin object with diff properties like type, role, and it also takes a function which returns some text*/
let Admin = {
    type: "Admin",
    role: "Manage the resources",
    work: () => {
        return `Your Work is to give tasks to employees`
    }
}

/* creates Employee object with diff properties like type, role, and it also takes a function which returns some text*/
let Employee = {
    type: "Employee",
    role: "use the resource",
    work: () => {
        return "Your work is to complete the given tasks"
    }
}

/* creates Data object with diff properties like type, role, and it also takes a function which returns some text*/
let Data = {
    address: "b/8, California",
    name: "Vaibhav",
    id: 1,
}

// creates Person object 
let Person = {

    // returns values respectively with the help of Person.__proto__ 
    details: () => {
        return `Welcome, ${Person.name}!\nYou are logged in as ${Person.type} with Id ${Person.
            id}\nYour Address is ${Person.address}.\nYour Role is to ${Person.role}\nAnd ${Person.work()}`
    }
}

console.log("----------------------------------------------------");


// creates a prototype of Person which can have the values of the Employee Object
Person.__proto__ = Employee; 

// creates a prototype of Data which can have the values of the Employee Object
Data.__proto__ = Employee;

// creates a prototype of Person which can have the values of the Data Object
Person.__proto__ = Data;

console.log(Person.details());
console.log("----------------------------------------------------");

// creates a prototype of Person which can have the values of the Admin Object
Person.__proto__ = Admin;

// creates a prototype of Data which can have the values of the Admin Object
Data.__proto__ = Admin;

// creates a prototype of Person which can have the values of the Data Object
Person.__proto__ = Data;

console.log(Person.details());
console.log("----------------------------------------------------");