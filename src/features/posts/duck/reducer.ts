

import { actionTypes, IPostRequestAction } from './actions';
import { Reducer } from 'redux';
import { PostsState } from './state';


const initialState: PostsState = {
    posts: [],
    requestPending: false
}

const postsReducer: Reducer<PostsState, IPostRequestAction> = (
    state: PostsState = initialState,
    action: IPostRequestAction
) => {
    switch (action.type) {

        case actionTypes.POSTS_REQUEST:
            return Object.assign({}, state, <PostsState>({
                requestPending: true,
                posts: []
            }));

        case actionTypes.POSTS_REQUEST_SUCCESS:
            return Object.assign({}, state, <PostsState>({
                posts: action.posts,
                requestPending: false
            }));

        case actionTypes.POSTS_REQUEST_FAILURE:
            return Object.assign({}, state, <PostsState>({
                requestPending: false,
                error: action.error
            }));

        case actionTypes.POSTS_CLEANUP:
            return Object.assign({}, state, <PostsState>(initialState));

        default:
            return state;
    }
};
export default postsReducer;

