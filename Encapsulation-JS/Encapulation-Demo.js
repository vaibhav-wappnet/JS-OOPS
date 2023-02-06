class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    get getName() {
        return `Student Name is : ${this.name}`;
    }
}

let student1 = new Student("Vaibhav", "test@ok.com");
console.log(student1.getName);