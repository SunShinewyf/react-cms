import { createStore, applyMiddleware } from 'redux';
import rootReducers from 'reducers/combineReducer';
import promiseMiddleware from 'middlewares/promiseMiddleware'
import { thunk } from 'redux-thunk'
import { saga } from 'redux-saga'

let store = createStore(rootReducers);
export default store;