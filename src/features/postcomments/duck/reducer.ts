import { PostCommentModel } from './reducer';

import { actionTypes, IPostCommentsRequestAction } from './actions';
import { Reducer } from 'redux';

export type PostCommentsState = {
    comments: PostCommentModel[],
    error?: string,
    requestPending: boolean
};

export type PostCommentModel = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
};

const initialState: PostCommentsState = {
    comments: [],
    requestPending: false
}

const postCommentsReducer: Reducer<PostCommentsState, IPostCommentsRequestAction> = (
    state: PostCommentsState = initialState,
    action: IPostCommentsRequestAction
) => {
    switch (action.type) {

        case actionTypes.POST_COMMENTS_REQUEST:
            return Object.assign({}, state, <PostCommentsState>({
                requestPending: true
            }));

        case actionTypes.POST_COMMENTS_REQUEST_SUCCESS:
            return Object.assign({}, state, <PostCommentsState>({
                comments: action.comments,
                requestPending: false
            }));

        case actionTypes.POST_COMMENTS_REQUEST_FAILURE:
            return Object.assign({}, state, <PostCommentsState>({
                requestPending: false,
                error: action.error
            }));

        default:
            return state;
    }
};
export default postCommentsReducer;

