class Vehicle {
    constructor(name, type, engine) {
        this.name = name,
        this.type = type,
        this.engine = engine
    }

    getDetails() {
        // this.engine = engine
        console.log(`method called for ${this.name}`)
        console.log(`company name : ${this.type} vehicle type :  ${this.name} Engine model : ${this.engine}`)
    }
}

class Bike extends Vehicle {
    constructor(name, type, engine) {
        super(type, name)
        this.name = name,
        this.type = type,
        this.engine = engine
    }

    bikeInfo() {
        // console.log(`function called ${super.getDetails()}`)
        console.log(`${this.name} ---- ${this.type} ---- ${this.engine}`)
    }
}

let myBike1 = new Vehicle("Yamaha", "Sports Bike", "150cc");
let myBike2 = new Bike("Honda", "Normal", "100cc")
myBike1.getDetails();
// myBike2.bikeInfo();
// myBike2.getDetails()