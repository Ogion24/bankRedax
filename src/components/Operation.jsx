import  {useState} from "react";
import {store} from "../configureStore/store.js";
import {deposit, withdraw} from "../actions/accountActions.js";
//контролируемый компонент
const Operation = () => {
    const [sum, setSum] = useState(0);
    return (
        <div>
            <button onClick={() => store.dispatch(withdraw(sum))}>Withdraw</button>
            <input
                onChange={e => setSum(+ e.target.value)}// любое изменение поля ввода попадает в value(State), + ->> number
                value={sum}//value->>поле ввода
                type="number"
                min="0"
            />
            <button onClick={() => store.dispatch(deposit(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;