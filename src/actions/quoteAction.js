export const PUT_QUOTE = 'PUT_QUOTE';

export const putQuote = quote => ({
    type: PUT_QUOTE,
    payload: quote
});