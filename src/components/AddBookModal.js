import React, { Component } from 'react';

class AddBookModal extends Component {
    render() {
        return (
            <div className='ModalOverlay'>
                <div className='Modal'>
                    <h1>Add a Book</h1>
                    <div className='Modal__form'>
                        <input type="text" placeholder='title'/>
                        <input type="text" placeholder='author'/>
                        <input type="text" placeholder='genre'/>
                        <input type="text" placeholder='year'/>
                        <div className='Modal__form__btns'>
                            <button className='Modal__form__btns__Add'>Add</button>
                            <button classname='Modal__form__btns__Cancel'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBookModal;