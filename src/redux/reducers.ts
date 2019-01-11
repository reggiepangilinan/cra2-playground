import { combineReducers } from 'redux';
import counterReducer from '../features/counter/duck/reducer';
import postsReducer from '../features/posts/duck/reducer';
import todosReducer from '../features/todos/duck/reducer';
import postCommentsReducer from '../features/postcomments/duck/reducer';

const reducers = combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    todos: todosReducer,
    comments: postCommentsReducer
});

export default reducers;