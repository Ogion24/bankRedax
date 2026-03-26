// это цепочка функций (каррирование).функция, которая принимает объект
// Из этого объекта сразу достаётся getState (деструктуризация)
//next — это функция, которая передаёт action дальше (следующему middleware или reducer)
//action =>Это функция, которая принимает action ,объект с данными (обычно { type, payload })
export const loggerEnchancer = ({getState}) => next => action  => {
    console.log(`type: ${ action.type },payload: ${ action.payload }`);//Логируем action
    console.log('state: ',getState());
    return     next(action);//Передаём action дальше,без неё action не дойдёт до reducer
}