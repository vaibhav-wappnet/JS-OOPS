let Person = function (name) {
    this.name = name;
}

User.prototype.Person = function (name) {
    console.log(name);
}
let person1 = new User("Normal Person");
