'use strict';

import React, {Component, PropTypes} from 'react';

export default class TestVerbs extends Component {
    render() {
        return (
            <div className="panel-body text-center">
                <div className="container">
                    <div className="row">
                        <h2>Translate in English:</h2>
                        <form action="#" method="post" className="form-inline">
                            <h3>Делать</h3><br />
                            <input type="text" className="form-control" placeholder="1-th form" name="1" />
                            <input type="text" className="form-control" placeholder="2-d form" name="2" />
                            <input type="text" className="form-control" placeholder="3-d form" name="3" />
                            <br /><br />
                            <button type="submit" className="btn btn-success btn-lg">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}