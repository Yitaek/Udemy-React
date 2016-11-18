import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component
// This componet should produce some HTML

const App = () => {
	return <div>Hi!</div>;
}

// => now replaces function in ES6

// Tell React to take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// App is a class
// To instantiate it, wrap it in JSX tag like <App />

// ReactDOM wants some component and target container

// Make one component per file