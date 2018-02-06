import InitialState from 'api/initialState'
import * as UserTypes from 'constants/userTypes'


//获取用户信息
export const userActions = {
    login(user,password) {
        return {
            type: 'LOGIN',
            data: {
                id: id,
                user: user,
                password: password
            }
        }
    },

    logout() {
        return {
            type: 'LOGOUT'
        }
    }
}