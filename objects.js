// Objects 
// Author https://nagvbt.github.io/

let person = {
  name: "miss",
  age: 30,
  greet: function (sam) {
    return `Hello, my name is ${this.name}`;
  },
};

console.log(person.name); 
console.log(person.greet("sam"));
