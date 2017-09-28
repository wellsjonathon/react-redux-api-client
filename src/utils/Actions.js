import { uuid } from './Utils';

/* Actions */
export const SET_FILTER = 'SET_FILTER';
export const CHANGE_AVAILABILITY = 'CHANGE_AVAILABILITY';
export const ADD_BOOK = 'ADD_BOOK';
export const SEARCH_BOOK_LIST = 'SEARCH_BOOK_LIST';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

/* Action Creators */
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

export const addBook = (title, author, genre, pubyear) => {
    let id = uuid();
    return {
        type: ADD_BOOK,
        id,
        title,
        author,
        genre,
        pubyear,
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