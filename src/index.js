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

store.dispatch(addBook('Havana Storm', 'Clive Cussler', 'Adventure', '2014'));
store.dispatch(addBook('Dune', 'Frank Herbert', 'Sci-fi', '1965'));
store.dispatch(addBook('The Mote in Gods Eye', 'Larry Niven', 'Sci-fi', '1974'));
store.dispatch(addBook('Foundation', 'Isaac Asimov', 'Sci-fi', '1951'));
store.dispatch(addBook('Ringworld', 'Larry Niven', 'Sci-fi', '1970'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <Provider store={store}>
                <NextApp />
            </Provider>,
            document.getElementById('root')
        )
    })
}