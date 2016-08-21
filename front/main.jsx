'use strict';

import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

import store from './store';

import router from './thems/default/Router.jsx';
import ws from 'WS';

ws.connect(store.dispatch);

render(router, document.getElementById('root'));

