// an Object named details
let details = {
    name: "Vaibhav",
    email: "test@ok.com",
    myFunction: function () {
        return (`the name is ${details.name} and email is ${details.email}`)
    },
    // object inside an object
    contact: {
        mobile: 9090,
        telephone: 9809
    }
};
console.log(details.name);
console.log(details.contact.mobile); 
console.log(details.myFunction()); 
// defining function class named person with some parameters
function person(f_name, l_name, email, contact) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.email = email;
    this.contact = contact;
}

// so many objects can be created using the person class
let person1 = new person("Vaibhav", "Waghela", "test1@ok.com", 9091232438);
let person2 = new person("Kendall", "Jenner", "test2@ok.com", 8642340256);
let person3 = new person();

console.log(person);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(`first Name : ${person1.f_name} ---- Last Name : ${person1.l_name} ---- email : ${person1.email} ---- contact : ${person1.contact}`);
console.log(`first Name : ${person2.f_name} ---- Last Name : ${person2.l_name} ---- email : ${person2.email} ---- contact : ${person2.contact}`);
