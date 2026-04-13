import {putQuote} from "../quote/quoteSlice.js";

export  const fetchQuote = () =>  {// action creator в котором можно задиспатчить функцию
    return dispatch => {// callback для dispatch ---> Operation-->>36
        dispatch(putQuote('Pending...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(error => {console.log(error);
                dispatch(putQuote('Failed to fetch quote. Please try again'));
            })
    }
}