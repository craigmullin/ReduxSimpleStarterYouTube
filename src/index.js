import React from 'react';
import ReactDOM from 'react-dom';

// Create new component. This component should produce HTML.
const App = function() { // "const" is ES6 syntax. const is final, it's constant
    return <div>Hi!</div>;
}

// Add this component's generated HTML and add it to the DOM

ReactDOM.render(<App />, document.querySelector('.container'));