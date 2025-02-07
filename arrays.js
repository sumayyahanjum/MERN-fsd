// Arrays Demo
// Author https://nagvbt.github.io/

// Declaration and Iteration
let fruits = ["Apple", "Banana", "Cherry"];
// fruits.forEach(select => console.log(select));  

// Array Methods
fruits.push("Mango"); // Add at the end
// fruits.forEach(fruit => console.log(fruit));  

fruits.pop(); // Remove from the end
// fruits.forEach(fruit => console.log(fruit));

fruits.shift(); // Remove from the start
// fruits.forEach(fruit => console.log(fruit));

fruits.unshift("Grapes"); // Add at the start  
fruits.forEach(fruit => console.log(fruit));

// 
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]
squared.forEach(sno => console.log(sno));
