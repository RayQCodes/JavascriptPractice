const person = {
  name: " hitesh",
  greet() {
    console.log(`hi i am ${this.name}`);
  },
};

person.greet();
let diffPerson = person.greet;
diffPerson();

//binding context
const boundgreet = person.greet.bind({ name: "John" });
boundgreet();
