import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

//redux
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

//store
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
