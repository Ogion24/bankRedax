import {store} from "../configureStore/store.js";
import {useSyncExternalStore} from "react";

const Balance = () => {
     const {balance} = useSyncExternalStore(store.subscribe, store.getState)//ререндеринг =встроенный хук: подпишется и
    // при любом изменении state и вызовет getState и результат положит в баланс
    return (
        <div>
            <h1>Bank</h1>
            <h2>Balance = {balance}</h2>
        </div>
    );
};

export default Balance;