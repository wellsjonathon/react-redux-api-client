import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder='search...' className='SearchBar'/>
            </div>
        );
    }
}

export default SearchBar;