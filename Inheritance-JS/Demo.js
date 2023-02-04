let Data = {
    name: "Vaibhav",
    age: 18
}

let UserDetails = {
    details: () => {
        return `${UserDetails.name} and ${UserDetails.age}`
    }
}

UserDetails.__proto__ = Data
// console.log();

console.log(UserDetails.details());