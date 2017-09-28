import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.css';
import App from './components/App';
import bookApp from './utils/Reducers';
import registerServiceWorker from './registerServiceWorker';

import {addBook} from './utils/Actions';

let store = createStore(bookApp);

store.dispatch(addBook('Book', 'Author', 'Genre', '1990'));
store.dispatch(addBook('Book', 'Author', 'Genre', '1990'));
store.dispatch(addBook('Book', 'Author', 'Genre', '1990'));
store.dispatch(addBook('Book', 'Author', 'Genre', '1990'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
