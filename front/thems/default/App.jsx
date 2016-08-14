'use strict';

import React, {Component, PropTypes} from 'react';

import Header from './Header/Header.jsx';
import LastResults from './LastResults/LastResults.jsx';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <LastResults/>
            </div>
        );
    }
}

export default App;