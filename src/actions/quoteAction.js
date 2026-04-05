export const PUT_QUOTE = 'PUT_QUOTE';

export const putQuote = quote => ({
    type: PUT_QUOTE,
    payload: quote
});
export  const fetchQuote = () =>  {// action creator в котором можно задиспатчить функцию
    return dispatch => {
        dispatch(putQuote('Pending...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(error => {console.log(error);
                dispatch(putQuote('Failed to fetch quote. Please try again'));
            })
    }
}