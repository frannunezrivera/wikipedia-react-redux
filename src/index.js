import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';

import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {fetchPages} from './actions'
import rootReducer from './reducers'
const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    combineReducers({
        rootReducer
    }),
    applyMiddleware(...middleware)
);

store.dispatch(fetchPages());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
