import React, { Component } from 'react';

class AddBookBtn extends Component {
    render() {
        return (
            <button className='AddBookBtn' onClick={this.props.onClick}>
                <span>Add a Book</span>
            </button>
        );
    }
}

export default AddBookBtn;