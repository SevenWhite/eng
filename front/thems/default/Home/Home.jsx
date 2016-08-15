'use strict';

import React, {Component, PropTypes} from 'react';

import Header from './Header/Header.jsx';
import LastResults from './LastResults/LastResults.jsx';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <LastResults/>
            </div>
        );
    }
}

export default Home;