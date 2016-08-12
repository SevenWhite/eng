'use strict';

import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class App extends Component {
    render() {
        return <h1>Hello, world!</h1>
    }
}

render(<App/>, document.getElementById('root'));

