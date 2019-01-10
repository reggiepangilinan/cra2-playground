import { combineReducers } from 'redux';
import counterReducer from '../features/counter/duck/reducer';
import postsReducer from '../features/posts/duck/reducer';

const reducers = combineReducers({
    counter: counterReducer,
    posts: postsReducer
});

export default reducers;