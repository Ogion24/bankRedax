import {store} from "../configureStore/store.js";
import {useSelector} from "react-redux"

const Balance = () => {
     const balance = useSelector(state => state.balance)
    return (
        <div>
            <h1>Bank</h1>
            <h2>Balance = {balance}</h2>
        </div>
    );
};

export default Balance;