export const doLogin = (email = '', password = '') => {

    if (email != 'xtheus@gmail.com' || password != 'espartania')
        return { type: 'ERROR_LOGIN' };

    return { type: 'DO_LOGIN' };
}

export const setVisibleMsgError = (show = false) => {
    return { type: 'SET_VISIBLE_MSG_ERROR', data: show };
}