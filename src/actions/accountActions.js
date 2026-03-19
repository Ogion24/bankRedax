export const DEPOSIT = 'DEPOSIT';// function creater
export const WITHDRAW = 'WITHDRAW';

export const deposit = sum => ({
    type: 'DEPOSIT',
    payload: sum//полезная нагрузка
})
export const withdraw = sum => ({
    type: 'WITHDRAW',
    payload: sum
})