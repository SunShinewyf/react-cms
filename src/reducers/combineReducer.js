import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import user from 'reducers/user';

const rootReducer = combineReducers({
    user,
    counter
});

export default rootReducer;