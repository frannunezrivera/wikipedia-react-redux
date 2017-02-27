import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import DetailContainer from './containers/DetailContainer/DetailContainer';
import './index.scss';

import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {fetchPages} from './actions'
import rootReducer from './reducers'
const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    combineReducers({
        rootReducer,
        routing: routerReducer
    }),
    applyMiddleware(...middleware)
);

store.dispatch(fetchPages());

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" name="root" component={App} title="Pages">
                <Route path='/page/:id' component={DetailContainer} title="Page Detail"/>
                <Route path='/bookmarks' title="Bookmarks"/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
