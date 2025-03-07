//  template string 
const templateString = `this is a template string where we can write multiline code  also decleare a variable with $ {}`
// console.log(templateString);
// array destructuring 
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
// console.log(car);
// console.log(truck);
// console.log(suv);
function calculate(a, b) {
    const add = a + b
    const minus = a - b
    const multiply = a * b
    const divide = a / b
    return [add,minus,multiply,divide]
}
const [add,minus,multiply,divide]=calculate(20,10);
// console.log(add);
// console.log(minus);
// console.log(multiply);
// console.log(divide);
// spred oparator --------------------
const odd =[1,3,5,7,9]
const OddNumber=[...odd]
// arry max-------------
const maxValue =Math.max(...odd);
const minValue =Math.min(...odd)
// object distructering -----------


// Create an Object
const person = {
    firstName: "Rahim MOlla",
    lastName: "Karim",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName} = person;
//   console.log(Object.keys(person));
//   console.log(Object.values(person));
  person.age=20
  Object.seal(person)
//   delete person.age
Object.freeze(person)
// console.log(Object.isSealed(person));
//   console.log(Object.entries(person));
//   console.log(Object.isFrozen(person));
// for in access property value 
for (const key in person) {
    // console.log(key);
}
// arrow function 


