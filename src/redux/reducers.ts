import { combineReducers } from 'redux';
import counterReducer from '../features/patterns/counter/duck/reducer';
import postsReducer from '../features/patterns/posts/duck/reducer';
import todosReducer from '../features/patterns/todos/duck/reducer';
import postCommentsReducer from '../features/patterns/postcomments/duck/reducer';

const reducers = combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    todos: todosReducer,
    comments: postCommentsReducer
});

export default reducers;