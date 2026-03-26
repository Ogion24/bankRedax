// если action === 'function' (брак,должен быть объект,иначе редьюсер поломается)-->>не дает next= не попадет в редьюсер
//усли норм = пропусти дальше
//ПОЗВОЛЯЕТ ПИСАТЬ action КАК ФУНКЦИИ,ПРИ ЭТОМ ВЫЗЫВАЕТ ИХ И НЕ ЛОМАЕТ РЕДЬЮСЕР
export  const thunkEnchancer =({ dispatch, getState }) => next => action => {
    if(typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action);
}