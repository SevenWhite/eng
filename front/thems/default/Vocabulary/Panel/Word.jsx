'use strict';

import React, {Component, PropTypes} from 'react';

export default class Word extends Component {
    static propTypes = {
        word: PropTypes.shape({
            en: PropTypes.string.isRequired,
            ru: PropTypes.string.isRequired
        }).isRequired
    };
    render() {
        const {word} = this.props;
        return (
            <tr>
                <td>1</td>
                <td>{word.en}</td>
                <td>noun</td>
                <td>{word.ru}</td>
                <td><input type="checkbox"/></td>
            </tr>
        );
    }
}