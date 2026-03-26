import {useState} from "react";
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";
import {putQuote} from "../actions/quoteAction.js";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    const fetchQuote =  () => {
        dispatch(putQuote('Pending...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(response => response.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(error => {console.log(error);
                dispatch(putQuote('Failed to fetch quote. Please try again'));
            })
    }

    return (
        <>
            <div className={'flex justify-center'}>
                <button
                    className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'}
                    onClick={() => dispatch(withdraw(sum))}
                >Withdraw
                </button>
                <input
                    className={'text-center mx-2 border rounded-lg font-bold text-white'}
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                    type="number"
                    min="0"
                />
                <button
                    className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'}
                    onClick={() => dispatch(deposit(sum))}
                >Deposit
                </button>
            </div>
            <div className={'flex justify-center mt-2'}>
                <button
                    onClick={fetchQuote}
                    className={'bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg '}
                >Get quote
                </button>
            </div>
        </>
    )
}

export default Operation;