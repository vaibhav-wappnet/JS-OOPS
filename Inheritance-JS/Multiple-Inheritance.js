let Tool = {
    type: "Steel",
    weight: "too Light"
}

let Work = {
    type: "Cutting",
    use: "Cutting the Wood",
    hours : 7,
    stock: () => {
        return "Cutting Machine Stock is available"
    }
}

let Machine = {
    use: "Harvesting",
    stock: () => {
        return "Harvesting Machine Stock is available"
    }
}

// Machine.__proto__ = "Harvesting Machine"

Machine.__proto__ = Tool;
console.log(Machine.type);
console.log(Machine.use);
console.log(Machine.weight);
console.log(Machine.stock());


Machine.__proto__ = Work;
console.log(Machine.type);
console.log(Machine.use);
console.log(Machine.hours);
console.log(Machine.stock());
console.log(Machine.__proto__.stock());