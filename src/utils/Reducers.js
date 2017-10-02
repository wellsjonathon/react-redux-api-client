import { combineReducers } from 'redux';
import { GET_BOOKS_REQUEST,
         GET_BOOKS_RECEIVED,
         CHECKOUT_BOOK_SUCCESS,
         RETURN_BOOK_SUCCESS,
         ADD_BOOK_REQUEST,
         ADD_BOOK_SUCCESS,
         SET_FILTER,
         SEARCH_BOOKLIST_REQUEST,
         SEARCH_BOOKLIST_RECEIVED,
         TOGGLE_MODAL } from './Actions';
import { FILTER_ALL } from './Filters';

/* Reducers */
const filter = (state = FILTER_ALL, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const bookList = (
    state = {
        isFetching: false,
        didInvalidate: false,
        books: []
    }, 
    action) => {
    switch (action.type) {
        case GET_BOOKS_REQUEST:
        case ADD_BOOK_REQUEST:
        case SEARCH_BOOKLIST_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case GET_BOOKS_RECEIVED:
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                books: action.bookList
            }
        case CHECKOUT_BOOK_SUCCESS:
        case RETURN_BOOK_SUCCESS:
            return {
                ...state,
                books: action.bookList
            }
        case SEARCH_BOOKLIST_RECEIVED:
            return {
                ...state,
                isFetching: false,
                books: action.results
            }
        default:
            return state;
    }
}

const showModal = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return !state;
        default:
            return state;
    }
}

// 'filter' is part of the state now for when the store is created with 'bookApp' (eg. state.filter)
/* State Definition */
const bookApp = combineReducers({
    filter,
    bookList,
    showModal
})

export default bookApp;