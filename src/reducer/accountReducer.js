import {DEPOSIT, WITHDRAW} from "../actions/accountActions.js";


export const accountReducer = (state, action) => {
    switch (action.type) {
        case DEPOSIT:
            return {...state, balance: state.balance + action.payload};//получит нач.баланс,заменит его на баланс+результат из экшен
        case WITHDRAW:
            return {
                ...state,
                balance: state.balance - action.payload >=  0 ? state.balance - action.payload:state.balance
    }
  default:
    return state;
}
}