// Advanced Closures and scope patterns

//Closure:
// a function that returns a function it is as simpe as that
// the reason why we use closures is to create private variables that cannot be accessed from outside the function scope
// simply we want to encapsulate some data and make it private since
// javascript does not have private variables we can use closures to achieve that

function outerFunction() {
  let privateVariable = "I am private";

  return function innerFunction() {
    console.log(privateVariable);
  };
}

const myClosure = outerFunction();
myClosure(); // Output: I am private

// Example 2: Closure with parameters
function makeMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = makeMultiplier(2);
console.log(double(5)); // Output: 10

const triple = makeMultiplier(3);
console.log(triple(5)); // Output: 15

// THE CLOSURE KEEPS THE SCOPE ALIVE
// ie even when we move out of the scope
// the inner function has access to the outer function scope

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const myCounter = counter();
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3

// now by all logic the count variable should be destroyed
// the moment we exit the counter function scope
// but since we have a closure the inner function still has access to it
// and the count variable is preserved between calls to myCounter function
//this is great for extending functionality without polluting the global scope
// but it will introduce some new problems namely memory consumption
// since the variables in the closure are not garbage collected until there are no references to the inner function
// so we need to be careful when using closures in large applications
// and when they are no longer needed we should nullify the references to the inner function
// to allow garbage collection to reclaim the memory
// like
myCounter = null; // now the closure can be garbage collected if there are no other references to it

//Advanced Closure Patterns

// Module Pattern
// we can use closures to create modules that encapsulate private data and expose public methods
const CounterModule = (function () {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();
console.log(CounterModule.increment()); // Output: 1
console.log(CounterModule.increment()); // Output: 2
console.log(CounterModule.decrement()); // Output: 1
console.log(CounterModule.getCount()); // Output: 1
// here the count variable is private and cannot be accessed directly from outside the module
// only the methods exposed in the returned object can interact with it

// Function Factories
// we can use closures to create function factories that generate specialized functions
function makeGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = makeGreeting("Hello");
console.log(sayHello("Alice")); // Output: Hello, Alice!

// Memoization
// we can use closures to create memoized functions that cache results of expensive function calls
// memoization is an optimization technique used to speed up function calls
// by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

function memoize(fn) {
  const cache = {};
  return function (...args) {
    // rest operator to capture all arguments
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage:
function slowFunction(num) {
  // Simulate a time-consuming computation
  for (let i = 0; i < 1e6; i++) {}
  return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(5)); // Computation happens, Output: 10
console.log(memoizedSlowFunction(5)); // Cached result, Output: 10
console.log(memoizedSlowFunction(10)); // Computation happens, Output: 20
console.log(memoizedSlowFunction(10)); // Cached result, Output: 20
// here the cache variable is private and cannot be accessed directly from outside the memoize function
// only the returned function can interact with it to store and retrieve cached results

//Advanced Closure Concepts:
// 1. Closures and Asynchronous Programming
// Closures can be particularly useful in asynchronous programming, such as with callbacks, promises, and async/await.
// They allow us to maintain access to variables from the outer scope even after the asynchronous operation has completed.
// Example:

function fetchData(url) {
  let requestId = Math.random().toString(36).substring(7); // private variable
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data from ${url} with requestId: ${requestId}`);
    }, 1000);
  });
}

fetchData("https://api.example.com").then((data) => {
  console.log(data); // Output: Data from https://api.example.com with requestId: <some_id>
});

// 2. Closures in Loops
// Closures can help capture the current value of a variable in a loop, preventing common pitfalls with variable scoping.
for (let i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index); // Output: 0, 1, 2, 3, 4
    }, index * 1000);
  })(i);
}

// 3. Closures and Memory Management
// Closures can help manage memory by allowing us to create private variables that are not accessible from the outside scope.
// This can help reduce memory leaks by limiting the scope of variables.
function createLargeObject() {
  let largeObject = new Array(1000000).fill("data"); // private variable
  return function () {
    return largeObject.length;
  };
}
const getLargeObjectSize = createLargeObject();
console.log(getLargeObjectSize()); // Output: 1000000
// Here, largeObject is not accessible from outside createLargeObject, helping to manage memory usage effectively.


// 4. Closures and 'this' Keyword
// Closures can help preserve the value of 'this' in asynchronous callbacks.
const obj = {
  name: "My Object",
  getNameAsync: function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.name);
      }, 1000);
    });
  },
};      

obj.getNameAsync().then((name) => {
  console.log(name); // Output: My Object
});
// Here, the closure created by the arrow function in setTimeout preserves the value of 'this' from the getNameAsync method.


//*******************************************************************************************************8 */


//Scope Patterns:

// IIFE (Immediately Invoked Function Expression)
// A common pattern to create a new scope and avoid polluting the global namespace
(function () {
  let privateVariable = "I am private";
  console.log(privateVariable); // Output: I am private
})();

// Here, privateVariable is not accessible from the global scope
// because it is encapsulated within the IIFE.



// Block Scope with let and const

{
  let blockScopedVariable = "I am block scoped";
  console.log(blockScopedVariable); // Output: I am block scoped
}   

// Here, blockScopedVariable is not accessible outside the block
// because it is declared with let which has block scope.
// Using const also creates block-scoped variables

{
  const anotherBlockScopedVariable = "I am also block scoped";
  console.log(anotherBlockScopedVariable); // Output: I am also block scoped
}   

// Here, anotherBlockScopedVariable is not accessible outside the block
// because it is declared with const which has block scope. 

// Module Pattern using IIFE
const MyModule = (function () {
  let privateVariable = "I am private";

  function privateMethod() {
    console.log(privateVariable);
  }

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

MyModule.publicMethod(); // Output: I am private

// Here, privateVariable and privateMethod are not accessible from outside the module
// only publicMethod is exposed to interact with the private members.   



// Revealing Module Pattern
const RevealingModule = (function () {
  let privateVariable = "I am private";

  function privateMethod() {
    console.log(privateVariable);
  } 

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

RevealingModule.publicMethod(); // Output: I am private

// Here, privateVariable and privateMethod are not accessible from outside the module
// only publicMethod is exposed to interact with the private members.
// The Revealing Module Pattern is similar to the Module Pattern
// but it emphasizes returning an object that reveals only the public members.


