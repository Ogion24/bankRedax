import  {useState} from "react";
//контролируемый компонент
const Operation = ({deposit, withdraw}) => {
    const [sum, setSum] = useState(0);
    return (
        <div>
            <button onClick={() => withdraw(sum)}>Withdraw</button>
            <input
                onChange={e => setSum(+ e.target.value)}// любое изменение поля ввода попадает в value(State), + ->> number
                value={sum}//value->>поле ввода
                type="number"
                min="0"
            />
            <button onClick={() => deposit(sum)}>Deposit</button>
        </div>
    );
};

export default Operation;