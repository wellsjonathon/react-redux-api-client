import axios from 'axios';
import * as Actions from './../utils/Actions';

const baseURL = 'http://SKREGIA675203P:4300';

// This is a Redux middleware module that serves the purpose of communicating
// with an API server asynchronously
const dataServiceMiddleware = store => next => action => {
    let bookId;
    
    // Pass all actions through
    next(action);
    switch (action.type) {
        case Actions.GET_BOOKS_REQUEST:
            axios
                .get(baseURL + '/api/books')
                .then(res => {
                    next({
                        type: Actions.GET_BOOKS_RECEIVED,
                        bookList: res.data,
                        receivedAt: Date.now()
                    })
                })
                .catch(err => {
                    next({
                        type: Actions.GET_BOOKS_ERROR,
                        err
                    })
                });
            break;
        case Actions.CHECKOUT_BOOK_REQUEST:
            bookId = action.id;
            axios
                .get(baseURL + '/api/checkout', {
                    params: {
                        id: bookId
                    }
                })
                .then(res => {
                    next({
                        type: Actions.CHECKOUT_BOOK_SUCCESS,
                        bookList: res.data
                    })
                })
                .catch(err => {
                    next({
                        type: Actions.CHECKOUT_BOOK_ERROR,
                        err
                    })
                });
            break;
        case Actions.RETURN_BOOK_REQUEST:
            bookId = action.id;
            axios
                .get(baseURL + '/api/return', {
                    params: {
                        id: bookId
                    }
                })
                .then(res => {
                    next({
                        type: Actions.RETURN_BOOK_SUCCESS,
                        bookList: res.data
                    })
                })
                .catch(err => {
                    next({
                        type: Actions.RETURN_BOOK_ERROR,
                        err
                    })
                });
            break;
        case Actions.ADD_BOOK_REQUEST:
            axios
                .post(baseURL + '/api/insert', {
                    title: action.title,
                    author: action.author,
                    genre: action.genre,
                    pubyear: action.pubyear
                })
                .then(res => {
                    next({
                        type: Actions.ADD_BOOK_SUCCESS,
                        bookList: res.data
                    })
                })
                .catch(err => {
                    next({
                        type: Actions.ADD_BOOK_ERROR,
                        err
                    })
                })
            break;
        case Actions.SEARCH_BOOKLIST_REQUEST:
            axios
                .get(baseURL + '/api/search', {
                    params: {
                        search: action.query
                    }
                })
                .then(res => {
                    next({
                        type: Actions.SEARCH_BOOKLIST_RECEIVED,
                        results: res.data
                    })
                })
                .catch(err => {
                    next({
                        type: Actions.SEARCH_BOOKLIST_ERROR,
                        err
                    })
                })
            break;
        default:
            break;
    }
}

export default dataServiceMiddleware;