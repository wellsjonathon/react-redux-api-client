import React, { Component } from 'react';

class AddBookModal extends Component {
    render() {
        if (!this.props.showModal)
            return null;

        return (
            <div className='ModalWrapper'>
                <div className='Modal'>
                    <h1>Add a Book</h1>
                    <div className='Modal__form'>
                        <input type="text" placeholder='title'/>
                        <input type="text" placeholder='author'/>
                        <input type="text" placeholder='genre'/>
                        <input type="text" placeholder='year'/>
                        <div className='Modal__form__btns'>
                            <button className='Modal__form__btns__Add'>
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