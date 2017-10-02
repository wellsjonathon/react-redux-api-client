import React, { Component } from 'react';
import FilterContainer from './../containers/FilterContainer';
import BookRow from './BookRow';
import { FILTER_ALL,
         FILTER_AVAILABLE,
         FILTER_UNAVAILABLE} from './../utils/Filters';
var FaSpinner = require('react-icons/lib/fa/spinner');

class BookList extends Component {
    render() {
        return (
            <div className='BookList'>
                <div className='Filters'>
                    <FilterContainer filter={FILTER_ALL} filterText='All'/>
                    <FilterContainer filter={FILTER_AVAILABLE} filterText='Available'/>
                    <FilterContainer filter={FILTER_UNAVAILABLE} filterText='Unavailable'/>
                </div>
                {
                    (this.props.isFetching)
                    ?   (<div className='BookList__loaderContainer'>
                            <FaSpinner className='BookList__loader'/>
                        </div>)
                    :   (<table className='BookList__table'>
                            <thead>
                                <tr>
                                    <th className='BookRow__title'>Title</th>
                                    <th className='BookRow__author'>Author</th>
                                    <th className='BookRow__genre'>Genre</th>
                                    <th className='BookRow__year'>Year</th>
                                    <th className='BookRow__available'>Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.books.map(book => {
                                        return <BookRow book={book} onClick={this.props.onClick} key={book.id}/>
                                    })
                                }
                            </tbody>
                        </table>)
                }
                <button className='BookList__refreshBtn' onClick={this.props.onRefresh}>
                    Refresh
                </button>
            </div>
        );
    }
}

export default BookList;