import { PostModel } from './reducer';

import { actionTypes, IPostRequestAction } from './actions';
import { Reducer } from 'redux';

export type PostsState = {
    posts: PostModel[],
    error?: string,
    requestPending: boolean
};

export type PostModel = {
    userId: number,
    id: number,
    title: string,
    body: string
};

const initialState: PostsState = {
    posts: [],
    requestPending: false
}

const postsReducer: Reducer<PostsState, IPostRequestAction> = (
    state: PostsState = initialState,
    action: IPostRequestAction
) => {
    switch (action.type) {

        case actionTypes.POSTS_REQUEST_PENDING:
            return Object.assign({}, state, <PostsState>({
                requestPending: true
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

        default:
            return state;
    }
};
export default postsReducer;

