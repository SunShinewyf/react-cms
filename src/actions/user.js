import * as UserTypes from 'constants/userTypes'

//获取用户信息
// export const userActions = {
//     login(name, password) {
//         return {
//             type: 'LOGIN',
//             payload: {
//                 promise: api.put('/login', {
//                     user: {
//                         name: name,
//                         password: password
//                     }
//                 })
//             }
//         }
//     },

//     logout() {
//         return {
//             type: 'LOGOUT',
//             payload: api.get('/logout')
//         }
//     }
// }

export const loginAction = (user) => {
    return {
        type: UserTypes.LOGIN,
        data: user
    }
}

export const loginSuccessAction = (token) => {
    return {
        type: UserTypes.LOGIN_SUCCESS,
        data: token
    }
}

export const loginFailureAction = (error) => {
    return {
        type: UserTypes.LOGIN_FAILURE,
        data: error
    }
}
