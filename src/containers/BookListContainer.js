import { connect } from 'react-redux';
import BookList from './../components/BookList';
import { changeAvailability } from './../utils/Actions';
import { FILTER_ALL, 
         FILTER_AVAILABLE,
         FILTER_UNAVAILABLE } from './../utils/Filters';

const getBooks = (books, filter) => {
    switch (filter) {
        case FILTER_ALL:
            return books;
        case FILTER_AVAILABLE:
            return books.filter(b => b.available);
        case FILTER_UNAVAILABLE:
            return books.filter(b => !b.available);
        default:
            return books;
    }
}

const mapStateToProps = state => {
    return {
        books: getBooks(state.bookList, state.filter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: id => {
            dispatch(changeAvailability(id))
        }
    }
}

const BookListContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(BookList);

export default BookListContainer;