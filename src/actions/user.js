import api from 'api/api'
//获取用户信息
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

//登录状态
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function fetchUser(){
    let uid = window.localStorage.getItem('uid');
    if(!uid){
        return {
            type: 'UID_NOT_FOUND'
        }
    }
    return {
        type:  'FETCH_USER',
        user: ''
    }
}