import { combineReducers } from 'redux';
import counterReducer from '../features/counter/duck/reducer';

const reducers = combineReducers({
    counter: counterReducer
});

export default reducers;