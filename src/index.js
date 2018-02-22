import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import tasks from './reducers'
import {
    logger,
    analytics,
    apiMiddleware
} from './middleware'

const store = createStore(
    tasks,
    applyMiddleware(thunk, apiMiddleware, logger, analytics)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
