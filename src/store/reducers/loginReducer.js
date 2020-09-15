const INITIAL_STATE = {
    logged: false,
    loading: false
};

export default loginReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'DO_LOGIN':
            return { ...state, logged: true }

        case 'DO_LOGOUT':
            return { ...state, logged: false }

        default:
            return state;
    }

};