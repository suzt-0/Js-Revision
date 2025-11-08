// modules in js is like a file that contains code we want to share with other files
// we can use export keyword to export code from a module
// and import keyword to import code from a module

// example of exporting a function from a module
export function greet(name) {
    return `Hello, ${name}!`;
}

// example of exporting a variable from a module
export const pi = 3.14159;

// example of exporting a class from a module
export class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `My name is ${this.name}.`;
    }
}

// we can also have a default export in a module
export default function farewell(name) {
    return `Goodbye, ${name}!`;
}

// Note: To use this module, you would typically import it in another file like so:
// import farewell, { greet, pi, Person } from './2.Modules.js';