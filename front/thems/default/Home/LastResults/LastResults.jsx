'use strict';

import React, {Component, PropTypes} from 'react';

class LastResults extends Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h2 className="text-center">Last Results</h2>
                </div>
                <div className="panel-body">
                    <table className="table text-center table-hover">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Date</th>
                                <th>Right answers</th>
                                <th>Wrong answers</th>
                                <th>Percentage</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>03/07/2016</td>
                                <td>8</td>
                                <td>2</td>
                                <td>80%</td>
                                <td><a href="results.html" type="button" className="btn btn-info btn-sm">Show details</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>03/07/2016</td>
                                <td>9</td>
                                <td>1</td>
                                <td>90%</td>
                                <td><a href="results.html" type="button" className="btn btn-info btn-sm">Show details</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LastResults;