/**
 * date: 2018-2-13
 * author: SunShinewyf
 */
import { takeLatest, takeEvery } from 'redux-saga/effects'
import { loginUserAsync } from './user';
import { LOGIN, LOGOUT } from 'constants/userTypes'


export default function* rootSaga() {
    yield [
        takeLatest(LOGIN, loginUserAsync),
    ]
}