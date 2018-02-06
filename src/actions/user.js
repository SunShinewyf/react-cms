import InitialState from 'api/initialState'
import * as UserTypes from 'constants/userTypes'


//获取用户信息
export const userActions = {
    login(user, password) {
        return {
            type: 'LOGIN',
            callback: {
                promise: api.put('/login', {
                    data: {
                        user: user,
                        password: password
                    }
                })
            }
        }
    },

    logout() {
        return {
            type: 'LOGOUT'
        }
    }
}