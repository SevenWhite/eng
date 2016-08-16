'use strict';

import {applyMiddleware, createStore, compose} from 'redux';

import reducers from '../reducers';

let enchancer = compose(
    // applyMiddleware(emitter, redirects),
    (window.devToolsExtension && NODE_ENV == 'development') ? window.devToolsExtension() : f => f
);

export default createStore(reducers, enchancer);