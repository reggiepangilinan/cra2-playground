
import { actionTypes, IPostCommentsRequestAction } from './actions';
import { Reducer } from 'redux';
import { PostCommentsState } from './state';

const initialState: PostCommentsState = {
    comments: [],
    requestPending: true
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

            case actionTypes.POST_COMMENTS_CLEANUP:
            return Object.assign({}, state, <PostCommentsState>(initialState));

        default:
            return state;
    }
};
export default postCommentsReducer;

