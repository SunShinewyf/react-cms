import * as UserTypes from 'constants/userTypes'

let initialState = {
    user: null,
    token: null,
    error: null
}

export default function UserReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UserTypes.LOGIN:
            return Object.assign({}, initialState, {
                user: action.data,
                error: null,
                token: null,
            });

        case UserTypes.LOGIN_SUCCESS:
            let user = action.data;
            window.localStorage.setItem('uid', user.id);
            return Object.assign({}, state, {
                user: action.data,
                error: null
            });

        case UserTypes.LOGIN_FAILURE:
            return Object.assign({}, state, {
                token: null,
                error: action.data
            })
        default:
            return initialState;
    }
}

