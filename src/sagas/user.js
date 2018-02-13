/**
 * date: 2018-02-12
 * author: SunShinewyf
 */

import { select, put, call } from 'redux-saga/effects';
import * as UserActions from 'actions/user';
import api from './api';

export function* loginUserAsync() {
    const user = yield select(state => state.user);
    const token = user.token;

    const data = yield call(function* () {
        api.put('/login', {
            user: user
        })
    }, 'login');
    console.log(data, '99999')
    if (data.code == 200) {
        yield put(UserActions.loginSuccessAction(true));
    } else {
        yield put(UserActions.loginFailureAction(data.message));
    }
}