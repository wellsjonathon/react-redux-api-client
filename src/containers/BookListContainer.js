import { connect } from 'react-redux';
import BookList from './../components/BookList';
import { requestBooks, checkoutBook, returnBook } from './../utils/Actions';
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
        books: getBooks(state.bookList.books, state.filter),
        isFetching: state.bookList.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (available, id) => {
            (available)
            ? dispatch(checkoutBook(id))
            : dispatch(returnBook(id))
        },
        onRefresh: () => {
            dispatch(requestBooks())
        }
    }
}

const BookListContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(BookList);

export default BookListContainer;