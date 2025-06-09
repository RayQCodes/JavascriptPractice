//prototypal inheritance

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`this is a prototype and can access ${this.name}`);
};
//we use Prototype to access the stuff in the function and we do this and we can create functions outside of the function itself and put it in the function essentially same as putting a function inside of the function.
let hitesh = new Person("Pragalv");
hitesh.greet();
