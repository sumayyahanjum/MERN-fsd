// TYPES OF JAVSCRIPT FUNCTIONS
// Author https://nagvbt.github.io/

// Function Declarations
function greet(name) {
    return `Hello, ${name}!`;
  }
console.log(greet("riha"));


// Function Expression
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(greet("riya")); 



// Arrow Function
const greet = (name) => `Hello, ${name}!`;
console.log(greet("sam")); 

//  Immediately Invoked Function Expressions (IIFE)

(function() {
    console.log("This runs right away!");
  })();

  var sum= (function(){
    let x=10;
    let y=5;
     return x+y;
  })();
  console.log(sum);



 
// Callback Functions
const greetFn = (name) => {
    console.log(`Hello, ${name}!`);
}

function processName(callback) {
  const name = "Mr NBT";
  callback(name);
}

processName(greetFn); 
