import {createSlice} from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState : 'Winter is coming...',
    reducers: {
        putQuote: (state, action) => action.payload
    }
})
export const {putQuote} = quoteSlice.actions;
export default quoteSlice.reducer;