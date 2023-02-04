class Animals {
    constructor(name, type) {
        console.log("Animals class is called...");
        this.name = name
        this.type = type
    }

    setPlace(place) {
        // console.log("setPlace called");
        this.place = place;
    }

    getDetails() {
        return (`This ${this.name} is ${this.type} ${this.name} which is generally located ${this.place}`);
    }

    submitData() {
        return (`Name : ${this.name} Type : ${this.type} Place : ${this.place}`)
    }
}

class Bear extends Animals {
    constructor(name, type, place) {
        // console.log("constructor method called of Bear");
        super(name, type, place);
    }

    getData() {
        return `${this.submitData()}`
    }

}

class PolarBear extends Bear {
    constructor(name, type, place, color) {
        console.log("constructor method called of PilarBear");
        super(name, type, place);
        this.color = color
    }

    setColor(color) {
        this.color = color;
    }
    getColor() {
        return `The color of the ${this.name} is ${this.color}`
    }

}

// Creates na animal1 Object that calls the setType() method which takes the value "Polar"

let animal1 = new Animals("some name", "some type");
// animal1.setName("some name");
// animal1.setType("some type");
// animal1.setPlace("some place");

// console.log(`${animal1.getDetails()}`); // worked!!
// console.log(`${animal1.submitData()}`); // worked!!
// console.log(`${animal1.getData()}`); // will not work because Parent class cannot access the properties of the Child!!

// Creates na animal2 Object of Bear class that calls the setType() method which takes the value "Jungle"

let bear = new Bear("Bear", "Jungle");
// bear.setName("Bear");
// bear.setType("Jungle");
// bear.setPlace("Jungles of Arizona");

// console.log(`${bear.submitData()}`); //worked!!
// console.log(`${bear.getDetails()}`); //worked!!
// console.log(`${bear.getData()}`); //worked!!

let polarBear = new PolarBear("Polar Bear");
polarBear.setColor("White");
console.log(`${polarBear.getColor()}`);