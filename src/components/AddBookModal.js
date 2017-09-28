import React, { Component } from 'react';

class AddBookModal extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '', 
            author: '',
            genre: '',
            pubyear: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    render() {
        if (!this.props.showModal)
            return null;

        return (
            <div className='ModalWrapper'>
                <div className='Modal'>
                    <h1>Add a Book</h1>
                    <div className='Modal__form'>
                        <input type="text" name='title' placeholder='title' onChange={this.handleChange}/>
                        <input type="text" name='author' placeholder='author' onChange={this.handleChange}/>
                        <input type="text" name='genre' placeholder='genre' onChange={this.handleChange}/>
                        <input type="text" name='pubyear' placeholder='year' onChange={this.handleChange}/>
                        <div className='Modal__form__btns'>
                            <button className='Modal__form__btns__Add' onClick={() => {this.props.onAdd(this.state)}}>
                                Add
                            </button>
                            <button className='Modal__form__btns__Cancel' onClick={this.props.onCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBookModal;