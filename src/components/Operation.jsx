import  {useState} from "react";
import {deposit, withdraw} from "../actions/accountActions.js";
import{useDispatch} from "react-redux"
//контролируемый компонент
const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input
                onChange={e => setSum(+ e.target.value)}// любое изменение поля ввода попадает в value(State), + ->> number
                value={sum}//value->>поле ввода
                type="number"
                min="0"
            />
            <button onClick={() => dispatch(deposit(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;