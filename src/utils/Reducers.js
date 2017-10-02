import { combineReducers } from 'redux';
import { GET_BOOKS_RECEIVED,
         CHECKOUT_BOOK_SUCCESS,
         RETURN_BOOK_SUCCESS,
         SET_FILTER,
         ADD_BOOK,
         SEARCH_BOOK_LIST,
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
        case GET_BOOKS_RECEIVED:
            return {
                ...state,
                books: action.bookList
            }
        case CHECKOUT_BOOK_SUCCESS:
            return {
                ...state,
                books: action.bookList
            }
        case RETURN_BOOK_SUCCESS:
            return {
                ...state,
                books: action.bookList
            }
        case ADD_BOOK:
            return [
                ...state, {
                    id: action.id,
                    title: action.title,
                    author: action.author,
                    genre: action.genre,
                    published: action.published,
                    available: action.available
                }
            ]
        case SEARCH_BOOK_LIST:
            return state.map(book => 
                (book.title.includes(action.query) || 
                    book.author.includes(action.query) || 
                    book.genre.includes(action.query) || 
                    book.published.includes(action.query))
                ? book
                : null
            )
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