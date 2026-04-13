import {configureStore} from '@reduxjs/toolkit';
import quote from '../features/quote/quoteSlice.js';
import balance from '../features/balance/balanceSlice.js'



export const store = configureStore({
    reducer: {
        quote, balance

    }
});