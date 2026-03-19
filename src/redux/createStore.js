export const createStore = (reducer, initialState) => {
    let state = initialState;
    let subscribers = [];//массив колбэков

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        subscribers.forEach(subscriber => subscriber());//оббегает массив и вызываем все функции,которые там есть
    }
    const subscribe = listener => {// подписчик
        subscribers.push(listener);//при изменении state-> уведомляет листенеров
        return() => subscribers = subscribers.filter(subscriber => subscriber !== listener); // создает фильтр в массиве всех субскрайберов кроме листенера
    }
    return{getState,dispatch,subscribe};
}