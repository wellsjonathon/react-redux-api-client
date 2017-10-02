import axios from 'axios';
import { GET_BOOKS_REQUEST,
         GET_BOOKS_RECEIVED,
         GET_BOOKS_ERROR,
         CHECKOUT_BOOK_REQUEST,
         CHECKOUT_BOOK_SUCCESS,
         CHECKOUT_BOOK_ERROR,
         RETURN_BOOK_REQUEST,
         RETURN_BOOK_SUCCESS,
         RETURN_BOOK_ERROR } from './../utils/Actions';

const baseURL = 'http://SKREGIA675203P:4300';

// This is a Redux middleware module that serves the purpose of communicating
// with an API server asynchronously
const dataServiceMiddleware = store => next => action => {
    let bookId;
    
    // Pass all actions through
    next(action);
    switch (action.type) {
        case GET_BOOKS_REQUEST:
            axios
                .get(baseURL + '/api/books')
                .then(res => {
                    next({
                        type: GET_BOOKS_RECEIVED,
                        bookList: res.data,
                        receivedAt: Date.now()
                    })
                })
                .catch(err => {
                    next({
                        type: GET_BOOKS_ERROR,
                        err
                    })
                });
            break;
        case CHECKOUT_BOOK_REQUEST:
            bookId = action.id;
            axios
                .get(baseURL + '/api/checkout', {
                    params: {
                        id: bookId
                    }
                })
                .then(res => {
                    next({
                        type: CHECKOUT_BOOK_SUCCESS,
                        bookList: res.data
                    })
                })
                .catch(err => {
                    next({
                        type: CHECKOUT_BOOK_ERROR,
                        err
                    })
                });
            break;
        case RETURN_BOOK_REQUEST:
            bookId = action.id;
            axios
                .get(baseURL + '/api/return', {
                    params: {
                        id: bookId
                    }
                })
                .then(res => {
                    next({
                        type: RETURN_BOOK_SUCCESS,
                        bookList: res.data
                    })
                })
                .catch(err => {
                    next({
                        type: RETURN_BOOK_ERROR,
                        err
                    })
                });
            break;
        default:
            break;
    }
}

export default dataServiceMiddleware;