import {createStore} from "redux";
import {accountReducer} from "../reducer/accountReducer.js";

const initialState = {
    balance: 0
}
export const store = createStore(accountReducer, initialState);

18:50