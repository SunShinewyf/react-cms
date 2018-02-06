import * as UserTypes from 'constants/userTypes'
// import defaultUser from 'api/initialState'

let initialState = {
    user: null,
    login: false,
    logout: false,
    loginError: null
}

export default function UserReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UserTypes.LOGIN_PENDING:
            return Object.assign({}, initialState, {
                login: true
            });

        case UserTypes.LOGIN_SUCCESS:
            let user = action.data;
            window.localStorage.setItem('uid', user.id);
            return Object.assign({}, state, {
                user: user,
                login: true,
                loginError: null
            });

        case UserTypes.LOGIN_ERROR:
            return Object.assign({}, state, {
                login: false,
                user: null,
                loginError: '登录失败'
            })
        case UserTypes.LOGOUT_SUCCESS:
            window.localStorage.removeItem('uid');
            return Object.assign({}, state, {
                user: null,
                login: false,
                logout: true,
                loginError: null,
            })
        default:
            return initialState;
    }
}

