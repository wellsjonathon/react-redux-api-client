import axios from 'axios';
import { uuid } from './Utils';
import { url_getAllBooks } from './Routes';

/* Actions */
export const REQUEST_ALL_BOOKS = 'REQUEST_ALL_BOOKS';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const SET_FILTER = 'SET_FILTER';
export const CHANGE_AVAILABILITY = 'CHANGE_AVAILABILITY';
export const ADD_BOOK = 'ADD_BOOK';
export const SEARCH_BOOK_LIST = 'SEARCH_BOOK_LIST';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

/* Action Creators */
const requestAllBooks = () => {
    return {
        type: REQUEST_ALL_BOOKS
    }
}

const receiveAllBooks = (json) => {
    return {
        type: RECEIVE_ALL_BOOKS,
        bookList: json.data.map(book => {book.id = uuid(); return book}),
        receivedAt: Date.now()
    }
}

export const fetchAllBooks = () => {
    return dispatch => {
        // dispatch(requestAllBooks())
        return axios.get('http://SKREGIA675203P:4300' + url_getAllBooks)
                    .then(response => {
                        dispatch(receiveAllBooks(response))
                    })
    }
}

const shouldfetchAllBooks = state => {
    const books = state.bookList;
    if (!books) {
        return true;
    } else if (books.isFetching) {
        return false;
    } else {
        return books.didInvalidate;
    }
}

export const fetchAllBooksIfNeeded = () => {
    return (dispatch, getState) => {
        // if (shouldfetchAllBooks(getState())) {
            return dispatch(fetchAllBooks());
        // } else {
        //     return Promise.resolve();
        // }
    }
}

export const setFilter = filter => {
    return {
        type: SET_FILTER,
        filter
    };
}

export const changeAvailability = id => {
    return {
        type: CHANGE_AVAILABILITY,
        id
    }
}

export const addBook = (title, author, genre, published) => {
    let id = uuid();
    return {
        type: ADD_BOOK,
        id,
        title,
        author,
        genre,
        published,
        available: 1
    }
}

export const searchBookList = query => {
    return {
        type: SEARCH_BOOK_LIST,
        query
    }
}

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
}