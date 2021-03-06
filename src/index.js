import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import DetailContainer from './containers/DetailContainer/DetailContainer';
import BookmarksContainer from './containers/BookmarksContainer/BookmarksContainer';
import './index.css';

import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import rootReducer from './reducers'
const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const persistedState = localStorage.getItem('wikiState') ? JSON.parse(localStorage.getItem('wikiState')) : {}

const store = createStore(
    combineReducers({
        rootReducer,
        routing: routerReducer
    }),
    persistedState,
    applyMiddleware(...middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

store.subscribe(() => {
    localStorage.setItem('wikiState', JSON.stringify({rootReducer: store.getState().rootReducer}))
})


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" name="root" component={App} title="Pages">
                <Route path='/page/:id' component={DetailContainer} title="Page Detail"/>
                <Route path='/bookmarks' component={BookmarksContainer} title="Bookmarks"/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
