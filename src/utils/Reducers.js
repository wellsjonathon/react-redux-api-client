import { combineReducers } from 'redux';
import { SET_FILTER,
         CHANGE_AVAILABILITY,
         ADD_BOOK,
         TOGGLE_MODAL } from './Actions';
import { FILTER_ALL } from './Filters';

// TEMPORARY, REMOVE ONCE BOOK LIST IS NO LONGER HARDCODED
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
                    pubyear: action.pubyear,
                    available: action.available
                }
            ]
        default:
            return state;
    }
}

const showModal = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return { state: !state };
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