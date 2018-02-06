import {createStore} from 'redux';
import rootReducers from 'reducers/combineReducer';

let store = createStore(rootReducers);
export default store;