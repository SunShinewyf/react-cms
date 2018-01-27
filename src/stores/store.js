import {createStore} from 'redux';
import combineReducers from 'reducers/combineReducer';

let store = createStore(combineReducers);
export default store;