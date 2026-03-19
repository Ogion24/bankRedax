import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";
import {useState} from "react";

function App() {
    const [balance, setBalance] = useState(0);
    const deposit = amount => setBalance(prevState => prevState + amount);// prevState - callback
    const withdraw = amount => setBalance(prevState => prevState - amount >= 0 ? prevState - amount : prevState);
    return (
        <div>
            <Balance balance={balance}/>
            <Operation deposit={deposit} withdraw={withdraw}/>
        </div>
    );
};

export default App;