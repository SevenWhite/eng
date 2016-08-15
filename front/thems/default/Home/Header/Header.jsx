'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Header extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h1 className="text-center">English Tests</h1>
                </div>
                <div className="panel-body">
                    <div className="col-md-6 text-center">
                        <div className="jumbotron">
                            <div className="row">
                                <h2>Tests</h2>
                                <p>Here you can train your memory on knowing words and forms of irregular verbs.</p>
                            </div>
                            <div className="row">
                                <a href="test.html" type="button" className="btn btn-lg btn-primary">Get test</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="jumbotron info">
                            <div className="row">
                                <h2>Vocabulary</h2>
                                <p>Here you can see all words and forms of irregular verbs and add new words.</p>
                            </div>
                            <div className="row">
                                <Link to="vocabulary" className="btn btn-lg btn-primary">Show words</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;