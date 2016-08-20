'use strict';

import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

import router from './thems/default/Router.jsx';
import ws from 'WS';

ws.connect();

render(router, document.getElementById('root'));

