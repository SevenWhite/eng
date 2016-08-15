'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export const Links = {
    HOME: '/',
    TEST: '/test',
    VOCABULARY: '/vocabulary'
};

const routes = [
    {
        text: 'Home',
        to: '/',
        link: Links.HOME
    },
    {
        text: 'Tests',
        to: '/test',
        link: Links.TEST
    },
    {
        text: 'Vocabulary',
        to: '/vocabulary',
        link: Links.VOCABULARY
    }
];

export default class PanelHeading extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        active: PropTypes.oneOf([Links.HOME, Links.TEST, Links.VOCABULARY]).isRequired
    };

    getClass(link) {
        return (link == this.props.active) ? 'active' : '';
    }

    render() {
        return (
            <div className="panel-heading">
                <div className="row">
                    <div className="col-xs-6"><h1>{this.props.name}</h1></div>
                    <div className="col-xs-6 menu">
                        <ul className="nav nav-pills nav-justified">
                            {routes.map(route => <li className={this.getClass(route.link)} key={route.link}><Link to={route.to}>{route.text}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}