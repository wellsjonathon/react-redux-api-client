/* Actions */
export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const GET_BOOKS_RECEIVED = 'GET_BOOKS_RECEIVED';
export const GET_BOOKS_ERROR = 'GET_BOOKS_ERROR';

export const CHECKOUT_BOOK_REQUEST = 'CHECKOUT_BOOK_REQUEST';
export const CHECKOUT_BOOK_SUCCESS = 'CHECKOUT_BOOK_SUCCESS';
export const CHECKOUT_BOOK_ERROR = 'CHECKOUT_BOOK_ERROR';

export const RETURN_BOOK_REQUEST = 'RETURN_BOOK_REQUEST';
export const RETURN_BOOK_SUCCESS = 'RETURN_BOOK_SUCCESS';
export const RETURN_BOOK_ERROR = 'RETURN_BOOK_ERROR';

export const ADD_BOOK_REQUEST = 'ADD_BOOK_REQUEST';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const ADD_BOOK_ERROR = 'ADD_BOOK_ERROR';

export const SEARCH_BOOKLIST_REQUEST = 'SEARCH_BOOKLIST_REQUEST';
export const SEARCH_BOOKLIST_RECEIVED = 'SEARCH_BOOKLIST_RECEIVED';
export const SEARCH_BOOKLIST_ERROR = 'SEARCH_BOOKLIST_ERROR';

export const SET_FILTER = 'SET_FILTER';
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

export const addBook = (title, author, genre, pubyear) => {
    return {
        type: ADD_BOOK_REQUEST,
        title,
        author,
        genre,
        pubyear
    }
}

export const setFilter = filter => {
    return {
        type: SET_FILTER,
        filter
    };
}

export const searchBookList = query => {
    return {
        type: SEARCH_BOOKLIST_REQUEST,
        query
    }
}

export const toggleModal = () => {
    return {
        type: TOGGLE_MODAL
    }
}