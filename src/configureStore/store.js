import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {accountReducer} from "../reducer/accountReducer.js";
import {loggerEnchancer} from "../enchancer/loggerEnchancer.js";
import {thunkEnchancer} from "../enchancer/thunkEnchancer.js";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
};

export const store = createStore(accountReducer, initialState, applyMiddleware(thunkEnchancer, loggerEnchancer));