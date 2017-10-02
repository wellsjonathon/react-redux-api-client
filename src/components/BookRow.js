import React, { Component } from 'react';

class BookRow extends Component {
    render() {
        let book = this.props.book;
        return (
            <tr className='BookRow'>
                <td className='BookRow__title'>{book.title}</td>
                <td className='BookRow__author'>{book.author}</td>
                <td className='BookRow__genre'>{book.genre}</td>
                <td className='BookRow__year'>{book.published}</td>
                <td className='BookRow__available'>
                    {
                        (book.available) ?
                            <button className='BookRow__statusBtn--available' onClick={() => this.props.onClick(book.available, book.id)}>
                                <span>Check-out</span>
                            </button> :
                            <button className='BookRow__statusBtn--unavailable' onClick={() => this.props.onClick(book.available, book.id)}>
                                <span>Return</span>
                            </button>
                    }
                </td>
            </tr>
        );
    }
}

export default BookRow;