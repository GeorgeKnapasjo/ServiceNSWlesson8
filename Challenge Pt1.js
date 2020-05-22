let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

// 1 Use the Array.filter function to create an array of all the pets owned by Luke.

let lukesPets = pets.filter(pet => pet.ownerName == "Luke")

console.log(lukesPets)

function ownedByLuke(pet) {
    return pet.ownerName == "Luke";
}

let lukesPets = pets.filter(ownedByLuke);

// 2 Use the Array.map function to create an array of all the names of the owners.


let getOwners = pets.map(pet => pet.ownerName)
console.log(getOwners)

// console.log(owners);

// 3 Use the Array.find function to retrieve the pet owned by Shaggy


let shaggysPet = pets.find(pet => pet.ownerName == "Shaggy")

console.log(shaggysPet)
// console.log(shaggysPet);

// 4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

let filteredPets = pets.filter(pet => pet.age < 5 && (pet.name[0] == "S" || pet.ownerName[0] =="S"))



console.log(filteredPets)
// console.log(filteredPets);