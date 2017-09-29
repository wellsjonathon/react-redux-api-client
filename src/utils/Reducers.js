import { combineReducers } from 'redux';
import axios from 'axios';
import { REQUEST_ALL_BOOKS,
         RECEIVE_ALL_BOOKS,
         SET_FILTER,
         CHANGE_AVAILABILITY,
         ADD_BOOK,
         SEARCH_BOOK_LIST,
         TOGGLE_MODAL } from './Actions';
import { fetchAllBooksIfNeeded } from './Actions';
import { FILTER_ALL } from './Filters';
import { url_getAllBooks } from './Routes';
import { uuid } from './Utils';

/* Reducers */
const filter = (state = FILTER_ALL, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const bookList = (state = [], action) => {
    switch (action.type) {
        case REQUEST_ALL_BOOKS:
            return fetchAllBooksIfNeeded();
        case RECEIVE_ALL_BOOKS:
            return action.bookList;
        case CHANGE_AVAILABILITY:
            return state.map(book => 
                (book.id === action.id)
                ? {...book, available: !book.available}
                : book
            );
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
            );
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