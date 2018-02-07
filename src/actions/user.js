import * as UserTypes from 'constants/userTypes'
import api from 'api/index'

//获取用户信息
export const userActions = {
    login(name, password) {
        return {
            type: 'LOGIN',
            callback: {
                promise: api.put('/login', {
                    user: {
                        name: name,
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