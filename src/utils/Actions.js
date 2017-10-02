/* Actions */
export const INVALIDATE_BOOKLIST = 'INVALIDATE_BOOKLIST';
export const REQUEST_ALL_BOOKS = 'REQUEST_ALL_BOOKS';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';

export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const GET_BOOKS_RECEIVED = 'GET_BOOKS_RECEIVED';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';

export const CHECKOUT_BOOK_REQUEST = 'CHECKOUT_BOOK_REQUEST';
export const CHECKOUT_BOOK_SUCCESS = 'CHECKOUT_BOOK_SUCCESS';
export const CHECKOUT_BOOK_ERROR = 'CHECKOUT_BOOK_ERROR';

export const RETURN_BOOK_REQUEST = 'RETURN_BOOK_REQUEST';
export const RETURN_BOOK_SUCCESS = 'RETURN_BOOK_SUCCESS';
export const RETURN_BOOK_ERROR = 'RETURN_BOOK_ERROR';

export const SET_FILTER = 'SET_FILTER';
export const ADD_BOOK = 'ADD_BOOK';
export const SEARCH_BOOK_LIST = 'SEARCH_BOOK_LIST';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

/* Action Creators */
export const requestBooks = () => {
    return {
        type: GET_BOOKS_REQUEST
    }
}

export const checkoutBook = id => {
    return {
        type: CHECKOUT_BOOK_REQUEST,
        id
    }
}

export const returnBook = id => {
    return {
        type: RETURN_BOOK_REQUEST,
        id
    }
}

export const setFilter = filter => {
    return {
        type: SET_FILTER,
        filter
    };
}

export const addBook = (title, author, genre, published) => {
    return {
        type: ADD_BOOK,
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