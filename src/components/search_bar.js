import React, { Component } from 'react';

// Functional Component
// const SearchBar = () => {
//     return <input />
// };

// Class Component
// All Class Components have state
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    // Every class must have a defined render() method
    // which must return jsx
    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term} 
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;