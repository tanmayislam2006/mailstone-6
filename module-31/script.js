const man = {
    name: "Tanmay Islam",
    fatherName: '---- Molla',
    motherName: '---- Begum',
    dateOFBirth: 'Seventh February Two Thousand Four',
    address: {
        division: 'Dhaka',
        district: 'Gopalganj',
        upazilla: 'Gopalganj Sadar',
        thana: 'Gopalganj',
        union: {
            unionName: 'Ulpur',
            wardNo: 6,
        },
    }

};
// console.log(man.address?.wardNo);
const number = [1, 2, 3, 4, 5, 6, 7]
const squareNumber = number.map(s => s * s)
// ---------------
const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function (fruit, index) {
    console.log(`Fruit at index ${index} is ${fruit}`);
});
// Define a class
class Pet {
    owner = 15
    #price = 1200
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    show() {
        return this.#price
    }
    // Method to display pet details
    describe() {
        return `${this.owner} ${this.name} is a ${this.type}.`;
    }
}

// Create an object from the class
const myPet = new Pet("Buddy", "Dog");
const myPetCat = new Pet("Fiona", "Cat")


// console.log(myPetCat.show());
// console.log(myPetCat.describe());

