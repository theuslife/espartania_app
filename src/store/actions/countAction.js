export const increment = () => {
    return { type: 'INCREMENT' }
}

export const decrement = () => {
    return { type: 'DECREMENT' }
}

export const doLogin =  () => {
    return { type: 'DO_LOGIN' };
}

export default {
    increment,
    decrement
}