import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBsYSBR6olmekttoDeww3IkV12W4-OMDm0';

// Create new component. This component should produce HTML.
const App = () => { // "const" is ES6 syntax. const is final, it's constant
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Add this component's generated HTML and add it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));