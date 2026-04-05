import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {accountReducer} from "../reducer/accountReducer.js";

import {thunk} from "redux-thunk";
import {logger} from "redux-logger";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
};

export const store = createStore(accountReducer, initialState, applyMiddleware(thunk, logger));