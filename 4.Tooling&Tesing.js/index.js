// Tooling & Testing: 

// npm/yarn, package.json, scripts


//npm and yarn: 
// simply package managers for JavaScript projects
// They help you manage dependencies, scripts, and project configurations.

// package.json:
// A file that contains metadata about your project, including dependencies, scripts, and other configurations.


// scripts:
// Custom commands defined in package.json to automate tasks like building, testing, and linting your code.

// how to use them:
// 1. Initialize a new project with npm or yarn
// 2. Install dependencies using npm install or yarn add
// 3. Define scripts in package.json
// 4. Run scripts using npm run <script-name> or yarn <script-name>

// eg: npm run build [this will run the build script defined in package.json]
// go through the official documentation for more details.
// site: https://docs.npmjs.com/ and https://yarnpkg.com/getting-started

//----------------------------------------------------------------------------------------------------------------------
// Linting & formatting: ESLint, Prettier:
/// Linting: ESLint
// A tool that analyzes your code to find and fix problems based on defined rules.

/// Formatting: Prettier
// A code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.

// how to use them:
// 1. Install ESLint and Prettier as dev dependencies
// 2. Configure ESLint with a .eslintrc file
// 3. Configure Prettier with a .prettierrc file
// 4. Run ESLint to check for code issues
// 5. Run Prettier to format your code

// eg: npx eslint . [this will run ESLint on the current directory]
// eg: npx prettier --write . [this will format all files in the current directory]
// go through the official documentation for more details.
// site: https://eslint.org/docs/user-guide/getting-started and https://prettier.io/docs/en/index.html

//----------------------------------------------------------------------------------------------------------------------
// Testing & Debugging:
// most overly used js testing and debugging tool is the browser console and debugger
// most testing features are built into modern browsers
// you just need to learn how to use them effectively
// they WILL be the CORE part of your coding workflow


//----------------------------------------------------------------------------------------------------------------------


// Unit testing: 

// Jest or Mocha + Chai
// Jest: A popular testing framework for JavaScript, often used with React.
// how to use Jest:
// 1. Install Jest as a dev dependency
// 2. Write test cases in files with .test.js or .spec.js extensions
// 3. Run tests using the jest command  

// for tutorials and more info, visit: https://jestjs.io/docs/getting-started


// Mocha + Chai: A flexible testing framework (Mocha) paired with an assertion library (Chai).

// how to use Mocha + Chai:
// 1. Install Mocha and Chai as dev dependencies
// 2. Write test cases in files with .test.js or .spec.js extensions
// 3. Run tests using the mocha command

// for tutorials and more info, visit: https://mochajs.org/ and https://www.chaijs.com/


//----------------------------------------------------------------------------------------------------------------------

// Debugging advanced techniques

// Using breakpoints, watch expressions, and call stacks in browser developer tools
// techniques:
// 1. Breakpoints: Pause code execution at a specific line to inspect variables and call stacks.
// 2. Watch Expressions: Monitor specific variables or expressions for changes during execution.
// 3. Call Stacks: View the sequence of function calls that led to a specific point in the code.
// 4. Step Through Code: Use step over, step into, and step out to navigate through code execution line by line.
// 5. Conditional Breakpoints: Set breakpoints that only trigger when certain conditions are met.
// 6. Network Tab: Inspect network requests and responses to debug API calls and data fetching.
// 7. Console Tab: Use console.log and other console methods to output information during code execution.


// go through the official documentation for more details.
// site: https://developers.google.com/web/tools/chrome-devtools/javascript


// Type checking intro: JSDoc and intro to TypeScript

// JSDoc:

// A way to add type annotations and documentation to your JavaScript code using comments.
// how to use JSDoc:
// 1. Add JSDoc comments above functions, variables, and classes to specify types and descriptions.
// 2. Use a tool like TypeScript or Closure Compiler to check types based on JSDoc annotations.
// for tutorials and more info, visit: https://jsdoc.app/about-getting-started.html



// TypeScript: 

// A superset of JavaScript that adds static types and other features to the language.
// it makes js more predictable and easier to debug by catching type-related errors at compile time.
// it also ensures better code quality and maintainability in larger projects.
// but its core feature remains type checking that allows for robust security against type-related bugs.

// how to use TypeScript:
// 1. Install TypeScript as a dev dependency
// 2. Rename your .js files to .ts
// 3. Add type annotations to your code
// 4. Compile TypeScript to JavaScript using the tsc command
// for tutorials and more info, visit: https://www.typescriptlang.org/docs/handbook/intro.html