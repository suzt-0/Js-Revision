// Fundamentals of React 


// 1. Components
// Components are the building blocks of a React application. They can be functional or class-based.
// They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.

// Example of a functional component:


        // import React from 'react';


        // function Welcome(props) {
        // return <h1>Hello, {props.name}</h1>;
        // }
        // export default Welcome;

//---------------------------------------------------------------------------------------------------------
// 2. JSX
// JSX is a syntax extension for JavaScript that looks similar to XML or HTML. 
// It allows you to write HTML elements and components in a more intuitive way within your JavaScript code.
// JSX gets transpiled to React.createElement calls, which create the virtual DOM elements.

        // Example of JSX:

        // const element = <h1>Hello, world!</h1>;
        // const element = React.createElement('h1', null, 'Hello, world!');

        //A more realistic example:

        // function App() {
        //   return (
        //     <div>
        //       <Welcome name="Alice" />
        //       <Welcome name="Bob" />
        //     </div>
        //   );
        // }

        // export default App;


        //the above JSX code allows you to use the Welcome component with different props.


//---------------------------------------------------------------------------------------------------------


// 3. Props
// Props (short for "properties") are a way to pass data from parent components to child components in React.
// They are read-only and help make components reusable by allowing them to receive different data.

        // Example of using props:

        // function Welcome(props) {
        //   return <h1>Hello, {props.name}</h1>;
        // }

        // usually used like this:
        // function App() {
        //   return (
        //     <div>
        //       <Welcome name="Alice" />
        //       <Welcome name="Bob" />
        //     </div>
        //   );
        // }
        // export default App;

        // here we passed name prop to Welcome component with different values.
        // the Welcome component uses props to display the name dynamically.




//---------------------------------------------------------------------------------------------------------


// 4. State

// State is a built-in object in React components that allows you to manage and track dynamic data.
// Unlike props, state is mutable and can be changed within the component.
// the state allows us to track changes and update the UI accordingly.
// a core concept of state management is that when the state of a component changes, 
// React automatically re-renders the component to reflect the updated state.

        // Example of using state:

        // import React, { useState } from 'react';

        // function Counter() {
        //   const [count, setCount] = useState(0); // -> useState is a Hook that lets you add state to functional components
        //   return (
        //     <div>
        //       <p>Count: {count}</p>
        //       <button onClick={() => setCount(count + 1)}>Increment</button> ( -> this updates the state)
        //     </div>
        //   );
        // }


///---------------------------------------------------------------------------------------------------------

// 5. Lifecycle Methods
// Lifecycle methods are special methods in class components that allow you to hook into different stages of a component's life.
// Common lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.

        // Example of a lifecycle method:

        // class MyComponent extends React.Component {
        //   componentDidMount() {
        //     // Code to run when the component mounts
        //   }
        //   render() {
        //     return <div>Hello, world!</div>;
        //   }
        // }
//---------------------------------------------------------------------------------------------------------
// 6. Event Handling
// React provides a way to handle events, such as clicks and form submissions, using event handlers.
// You can pass event handler functions as props to components.

        // Example of event handling:

        // function Button() {
        //   const handleClick = () => {
        //     alert('Button clicked!');
        //   };
        //   return <button onClick={handleClick}>Click me</button>;
        // }
//---------------------------------------------------------------------------------------------------------
// 7. Conditional Rendering
// Conditional rendering allows you to render different UI elements based on certain conditions.
// You can use JavaScript operators like if-else or ternary operators to achieve this.

        // Example of conditional rendering:

        // function Greeting(props) {
        //   return (
        //     <div>
        //       {props.isLoggedIn ? (
        //         <h1>Welcome back!</h1>
        //       ) : (
        //         <h1>Please log in.</h1>
        //       )}
        //     </div>
        //   );
        // }

//---------------------------------------------------------------------------------------------------------
// 8. Lists and Keys
// In React, you can render lists of elements using the map() function.
// Each element in the list should have a unique "key" prop to help React identify
// which items have changed, are added, or are removed.

        // Example of rendering a list:

        // function NumberList(props) {
        //   const numbers = props.numbers;
        //   return (
        //     <ul>
        //       {numbers.map((number) => (
        //         <li key={number.toString()}>{number}</li>
        //       ))}
        //     </ul>
        //   );
        // }
//---------------------------------------------------------------------------------------------------------
// 9. Forms
// Forms in React are used to collect user input. You can manage form data using state and handle form submissions with event handlers.

        // Example of a controlled form:    
        // import React, { useState } from 'react';
        // function NameForm() {
        //   const [name, setName] = useState('');
        //   const handleChange = (event) => {
        //     setName(event.target.value);
        //   };
        //   const handleSubmit = (event) => {
        //     alert('A name was submitted: ' + name);
        //     event.preventDefault();
        //   };
        //   return (
        //     <form onSubmit={handleSubmit}>
        //       <label>
        //         Name:
        //         <input type="text" value={name} onChange={handleChange} />
        //       </label>
        //       <button type="submit">Submit</button>
        //     </form>
        //   );
        // }

//---------------------------------------------------------------------------------------------------------

// 10. Hooks
// Hooks are functions that let you use state and other React features in functional components.
        // Example of using the useEffect Hook:

        // import React, { useState, useEffect } from 'react';
        // function Timer() {
        //   const [seconds, setSeconds] = useState(0);
        //   useEffect(() => {
        //     const interval = setInterval(() => {                                     
        //       setSeconds((prevSeconds) => prevSeconds + 1);
        //     }, 1000);
        //     return () => clearInterval(interval);
        //   }, []);
        //   return <div>Timer: {seconds} seconds</div>;
        // }

//---------------------------------------------------------------------------------------------------------

// 11. Context API
// The Context API allows you to share data across components without passing props down manually at every level.
        // Example of using Context API:    
        // import React, { createContext, useContext } from 'react';
        // const ThemeContext = createContext('light');
        // function ThemedButton() {
        //   const theme = useContext(ThemeContext);
        //   return <button className={theme}>Themed Button</button>;
        // }


//---------------------------------------------------------------------------------------------------------
// 12. Error Boundaries
// Error boundaries are React components that catch JavaScript errors in their child component tree,
// log those errors, and display a fallback UI instead of the component tree that crashed.
        // Example of an error boundary:    
        // class ErrorBoundary extends React.Component {
        //   constructor(props) {
        //     super(props);
        //     this.state = { hasError: false };
        //   }
        //   static getDerivedStateFromError(error) {
        //     return { hasError: true };
        //   }
        //   componentDidCatch(error, info) {
        //     // Log error to an error reporting service
        //   }
        // }
        //   render() {
        //     if (this.state.hasError) {
        //       return <h1>Something went wrong.</h1>;
        //     }
        //     return this.props.children; 
        //   }
        // }

        // quite complex to look at but the main idea is to catch errors in child components and show a fallback UI.
        // this allows us to handle errors gracefully in React application


//---------------------------------------------------------------------------------------------------------
// 13. Portals
// Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
        
// Example of using Portals:    
        // import React from 'react';
        // import ReactDOM from 'react-dom';
        // function Modal({ children }) {
        //   return ReactDOM.createPortal(
        //     <div className="modal">{children}</div>,
        //     document.getElementById('modal-root')
        //   );
        // }
        
        // this basically allows us to render components outside the main DOM tree, useful for modals, tooltips, etc.
        // its important for managing z-index and overlay issues in web applications.
        // the z-index issue arises when you have components that need to appear above others,
        // and rendering them outside the main DOM tree helps avoid conflicts with CSS stacking contexts.


//---------------------------------------------------------------------------------------------------------
// 14. Fragments
// Fragments let you group a list of children without adding extra nodes to the DOM.

// A realistic example of using Fragments:
        // import React from 'react';
        // function Table() {
        //   return (
        //     <table>
        //       <tbody>
        //         <tr>
        //           <React.Fragment>
        //             <td>Cell 1</td>
        //             <td>Cell 2</td>
        //           </React.Fragment>
        //         </tr>
        //       </tbody>
        //     </table>
        //   );
        // }

        //above we used React.Fragment to group the <td> elements without adding an extra element to the DOM.
        // which allows us to keep the DOM structure clean and avoid unnecessary wrappers like <div> or <span>.
        // Additionally, it helps in maintaining the layout and styling of the table cells.
        // This allows us to return multiple elements from a component without adding extra divs or spans to the DOM

        // most often the fragment syntax is used like this:
        // <>
        //   <td>Cell 1</td>
        //   <td>Cell 2</td>
        // </>
        // which is a quick method to use fragments without typing React.Fragment each time.

//---------------------------------------------------------------------------------------------------------
// 15. Higher-Order Components (HOCs)
// HOCs are functions that take a component and return a new component with enhanced functionality.
// They are used for reusing component logic.

        // Example of a Higher-Order Component:
        // function withLogging(WrappedComponent) {
        //   return class extends React.Component {
        //     componentDidMount() {
        //       console.log('Component mounted');
        //     }
        //     render() {
        //       return <WrappedComponent {...this.props} />;
        //     }
        //   };
        // }
        // The withLogging HOC adds logging functionality to any component it wraps.

//---------------------------------------------------------------------------------------------------------

// 16. Render Props
// Render props is a technique for sharing code between React components using a prop whose value is a function.
// This function returns a React element and allows for dynamic rendering.

        // Example of using Render Props:
        // function DataFetcher({ render }) {
        //   const [data, setData] = React.useState(null);
        //   React.useEffect(() => {
        //     fetch('https://api.example.com/data')
        //       .then((response) => response.json())
        //       .then((data) => setData(data));
        //   }, []);
        //   return render(data);
        // }
        // The DataFetcher component fetches data and uses the render prop to pass the data to its child component. 


//---------------------------------------------------------------------------------------------------------

// 17. React Router

// React Router is a library for routing in React applications. 
// It allows you to create single-page applications with navigation without full page reloads.
// this is done by mapping URL paths to React components.
// and it is used because in react apps we often want to have multiple views or pages,
// and react router helps us manage the navigation between these views seamlessly.

        // Example of using React Router:
        // import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
        // function Home() {
        //   return <h2>Home</h2>;
        // }
        // function About() {
        //   return <h2>About</h2>;
        // }
        // function App() {
        //   return (
        //     <Router>
        //       <nav>
        //         <Link to="/">Home</Link>
        //         <Link to="/about">About</Link>
        //       </nav>
        //       <Switch>
        //         <Route exact path="/" component={Home} />
        //         <Route path="/about" component={About} />
        //       </Switch>
        //     </Router>
        //   );
        // }
//--------------------------------------------------------------------------------------------------------- 

// 18. Redux (State Management)
// Redux is a predictable state container for JavaScript applications.
// It helps manage the state of an application in a single, centralized store.
// Redux is often used with React to handle complex state management needs.
        // Example of using Redux:

        // import { createStore } from 'redux';
        // const initialState = { count: 0 };
        // function counterReducer(state = initialState, action) {
        //   switch (action.type) {
        //     case 'INCREMENT':
        //       return { ...state, count: state.count + 1 };
        //     case 'DECREMENT':
        //       return { ...state, count: state.count - 1 };
        //     default:
        //       return state;
        //   }
        // }
        // const store = createStore(counterReducer);
        // store.subscribe(() => {
        //   console.log('State updated:', store.getState());
        // });
        // store.dispatch({ type: 'INCREMENT' });
        // store.dispatch({ type: 'DECREMENT' });

        // In this example, we created a Redux store with a simple counter reducer.
        // We defined actions to increment and decrement the count, 
        // and we subscribed to store updates to log the state changes.
        // Redux helps manage the state of the application in a predictable way, 
        // making it easier to debug and maintain complex applications.

//---------------------------------------------------------------------------------------------------------
// 19. Testing with React Testing Library and Jest
// React Testing Library and Jest are popular tools for testing React applications.
// React Testing Library provides utilities to test React components by simulating user interactions and verifying component behavior.
// Jest is a JavaScript testing framework that works well with React for running tests and providing assertions.
        // Example of a simple test using React Testing Library and Jest:
        // import { render, screen, fireEvent } from '@testing-library/react';
        // import '@testing-library/jest-dom/extend-expect';    
        // import Counter from './Counter'; // Assume Counter is a React component
        // test('increments counter on button click', () => {
        //   render(<Counter />);
        //   const button = screen.getByText('Increment');
        //   fireEvent.click(button);
        //   expect(screen.getByText('Count: 1')).toBeInTheDocument();
        // });

//---------------------------------------------------------------------------------------------------------
// 20. Performance Optimization Techniques
// Performance optimization techniques in React include memoization, code splitting, lazy loading, and using the React Profiler.
// These techniques help improve the performance of React applications 
// by reducing unnecessary re-renders, optimizing resource loading, and identifying performance bottlenecks.

//Techniques include:
// 1. Memoization with React.memo and useMemo
    // helps prevent unnecessary re-renders of components by memoizing their output based on props or state.

// 2. Code Splitting with React.lazy and Suspense
    // allows you to split your code into smaller chunks that can be loaded on demand, improving initial load times.

// 3. Using the React Profiler to identify performance bottlenecks
    // helps you analyze the rendering behavior of your components and find areas for optimization.

// 4. Avoiding inline functions and objects in props
    // prevents unnecessary re-renders by ensuring that props are stable and not recreated on every render.

// 5. Optimizing list rendering with keys and virtualization
    // improves performance when rendering large lists by using unique keys and techniques like windowing or virtualization.


//---------------------------------------------------------------------------------------------------------

// useReducer Hook:
// The useReducer hook is an alternative to useState for managing complex state logic in React functional components.
// It is particularly useful when the state depends on previous state values or when multiple state variables need to be updated together.
// The useReducer hook takes in a reducer function and an initial state, and returns the current state and a dispatch function to update the state.
// Example of using the useReducer Hook:

// import React, { useReducer } from 'react';
// const initialState = { count: 0 };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }
// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }
// In this example, we defined a reducer function that handles increment and decrement actions.
// The Counter component uses the useReducer hook to manage the count state and provides buttons to dispatch actions to update the state.

//-----------------------------------------------------------------------------------------------------------------

// Redux:

//A tool similar to useReducer but used for larger applications where state management becomes complex.
// Redux provides a centralized store to manage the state of the entire application.
// It follows a unidirectional data flow, where actions are dispatched to update the state through reducers.
// Redux is often used with React applications to handle global state management and facilitate communication between components.


// store -> a centralized place to hold the application state
// actions -> plain JavaScript objects that describe what happened in the application
// reducers -> pure functions that specify how the state changes in response to actions
// dispatch -> a function used to send actions to the store to update the state


// eg:
// import { createStore } from 'redux';
// const initialState = { count: 0 };
// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }
// const store = createStore(counterReducer);
// store.subscribe(() => {
//   console.log('State updated:', store.getState());
// });
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });


//--------------------------------------------------------------------------------------------
// Useref Hook:
// The useRef hook is used to create a mutable reference that persists across renders in React functional components.
// ie it allows you to access and manipulate DOM elements directly
// or to store mutable values that do not trigger re-renders when updated.
// Example of using the useRef Hook:

// import React, { useRef } from 'react';
// function TextInput() {
//   const inputRef = useRef(null);
//   const focusInput = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

//When to use useRef:
// 1. Accessing DOM elements directly for tasks like focusing an input or measuring dimensions.
// 2. Storing mutable values that do not require re-rendering, such as timers or previous state values.
// 3. Keeping track of values across renders without causing re-renders, such as tracking if a component is mounted.


//Practical usecase of the useRef Hook:
//Lets imagine we have a form with an input field and a submit button.
//We want to focus the input field automatically when the component mounts,
// and we also want to keep track of how many times the form has been submitted without causing re-renders.
// We can use the useRef hook to achieve this:

// import React, { useRef, useEffect, useState } from 'react';
// function Form() {
//   const inputRef = useRef(null);
//   const submitCountRef = useRef(0);
//   const [submitted, setSubmitted] = useState(false);
//   useEffect(() => {
//     inputRef.current.focus(); // Focus the input field on mount
//   }, []);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     submitCountRef.current += 1; // Increment the submit count
//     setSubmitted(true); // Update state to trigger re-render
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" ref={inputRef} />
//         <button type="submit">Submit</button>
//       </form>
//       {submitted && (
//         <p>Form submitted {submitCountRef.current} times</p>
//       )}
//     </div>
//   );
// }

// In this example, we use useRef to create a reference to the input field and focus it when the component mounts.
// We also use another useRef to keep track of the number of times the form has been submitted.
// This allows us to update the submit count without causing unnecessary re-renders of the component.

//---------------------------------------------------------------------------------------------------------

// UseContext Hook:
// The useContext hook is used to access the value of a context in React functional components.
// Context provides a way to share values between components without having to pass props down manually at every level.
// Example of using the useContext Hook:
// import React, { createContext, useContext } from 'react';
// const ThemeContext = createContext('light');
// function ThemedButton() {
//   const theme = useContext(ThemeContext);
//   return <button className={theme}>Themed Button</button>;
// }    
// In this example, we created a ThemeContext and used the useContext hook to access its value in the ThemedButton component.

// When to use useContext:
// 1. Sharing global data or settings across multiple components, such as themes or user authentication status.
// 2. Avoiding prop drilling by providing data directly to components that need it, regardless of their position in the component tree.
// 3. Managing state that needs to be accessed by many components without passing props through intermediate components.

//---------------------------------------------------------------------------------------------------------

//UseCallback Hook:
// The useCallback hook is used to memoize functions in React functional components.
// It returns a memoized version of the callback function that only changes if one of the dependencies has changed.
// This is useful for optimizing performance by preventing unnecessary re-creations of functions on every render.

// Example of using the useCallback Hook:
// import React, { useState, useCallback } from 'react';
// function Counter() {
//   const [count, setCount] = useState(0);
//   const increment = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }
// In this example, we used the useCallback hook to memoize the increment function.
// This prevents the function from being recreated on every render, which can improve performance,
// especially when passing the function as a prop to child components that rely on reference equality to avoid re-renders.

// When to use useCallback:
// 1. When passing functions as props to child components that are memoized with React.memo.
// 2. When defining functions inside components that are used in event handlers or effects.
// 3. When you want to optimize performance by preventing unnecessary re-creations of functions on every render.


//---------------------------------------------------------------------------------------------------------

// UseMemo Hook:
// The useMemo hook is used to memoize the result of a computation in React functional components.
// It returns a memoized value that only recomputes when one of the dependencies has changed.
// This is useful for optimizing performance by avoiding expensive calculations on every render.

// Example of using the useMemo Hook:
// import React, { useState, useMemo } from 'react';
// function Fibonacci({ n }) {
//   const fib = useMemo(() => {
//     function computeFibonacci(num) {
//       if (num <= 1) return num;
//       return computeFibonacci(num - 1) + computeFibonacci(num - 2);
//     }
//     return computeFibonacci(n);
//   }, [n]);
//   return <div>Fibonacci of {n} is {fib}</div>;
// }
// In this example, we used the useMemo hook to memoize the result of the Fibonacci computation.
// This prevents the expensive calculation from being performed on every render unless the input n changes.

// When to use useMemo:
// 1. When performing expensive calculations that should only be recomputed when necessary.
// 2. When deriving values from props or state that are used in rendering or other computations.
// 3. When optimizing performance by avoiding unnecessary recalculations on every render.

//---------------------------------------------------------------------------------------------------------

// Short Summary:
// React is a powerful JavaScript library for building user interfaces.
// Component-> reusable building blocks of UI
// JSX -> syntax extension for writing HTML-like code in JavaScript
// Props -> read-only data passed from parent to child components
// State -> mutable data managed within components
// Lifecycle Methods -> special methods to hook into component life stages
// Event Handling -> handling user interactions
// Conditional Rendering -> rendering UI based on conditions
// Lists and Keys -> rendering lists with unique keys
// Forms -> managing user input
// Hooks -> functions to use state and other React features in functional components
// Context API -> sharing data across components without prop drilling
// Error Boundaries -> catching errors in component tree
// Portals -> rendering components outside main DOM tree
// Fragments -> grouping elements without extra DOM nodes
// Higher-Order Components -> functions that enhance components
// Render Props -> sharing code using a prop that is a function
// React Router -> routing in single-page applications
// Redux -> predictable state management
// Testing -> using React Testing Library and Jest
// UseState-> managing state in functional components
// UseReducer-> managing complex state logic
// UseRef-> accessing DOM elements and mutable values
// UseContext-> accessing context values
// UseCallback-> memoizing functions
// UseMemo-> memoizing computed values