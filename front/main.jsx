'use strict';

import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

import router from './thems/default/Router.jsx';

let socket = io('localhost');
socket.on('connect', () => {
    console.log('connection successfully');
});

render(router, document.getElementById('root'));

