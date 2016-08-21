'use strict';

import {applyMiddleware, createStore, compose} from 'redux';

import crashReporter from '../middlewares/crashReporter';
import socketEmitter from '../middlewares/socketEmitter';

import reducers from '../reducers';

let enchancer = compose(
    applyMiddleware(crashReporter, socketEmitter),
    (window.devToolsExtension && NODE_ENV == 'development') ? window.devToolsExtension() : f => f
);

export default createStore(reducers, enchancer);