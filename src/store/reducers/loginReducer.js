const INITIAL_STATE = {
    logged: false,
    loading: false,
    visibleErrorMsg: false
};

export default loginReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'DO_LOGIN':
            return { ...state, logged: true, visibleErrorMsg: false }

        case 'DO_LOGOUT':
            return { ...state, logged: false, visibleErrorMsg: false }

        case 'ERROR_LOGIN':
            return { ...state, logged: false, visibleErrorMsg: true }

        case 'SET_VISIBLE_MSG_ERROR':
            return { ...state, visibleErrorMsg: action.data }

        default:
            return state;
    }

};