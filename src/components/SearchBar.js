import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            query: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({ query: event.target.value })
    }

    handleKeyPress(event) {
        if (event.keyCode === 13) { // 13 = Enter
            event.preventDefault();
            this.props.search(this.state.query);
        }
    }

    render() {
        return (
            <div>
                <input type="text" placeholder='search...' className='SearchBar'
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyPress}/>
            </div>
        );
    }
}

export default SearchBar;