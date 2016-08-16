'use strict';

import {List} from 'immutable';
import * as actions from '../actions';

let initialState = List();

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_WORD:
            return state.push(action.word);
        default:
            return state;
    }
};