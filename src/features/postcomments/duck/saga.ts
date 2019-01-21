import postsApi, { POSTS, COMMENTS, IBlogApi } from '../../../api/blogApi';

import { actionTypes, IPostCommentsRequestAction, postCommentsRequestSuccess, postCommentsRequestFailure, postCommentsRequestPending } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';
import { PostCommentModel } from './state';
import blogApi from '../../../api/blogApi';

function* fetchPostComments(action: IPostCommentsRequestAction) {
    try {
        yield put(postCommentsRequestPending());
        const api : IBlogApi = blogApi()
        const response: AxiosResponse<PostCommentModel[]> = yield call(api.getPostComments, action.postId)

        yield put(postCommentsRequestSuccess(response.data));
 
    } catch (e) {
        yield put(postCommentsRequestFailure(e.message));
    }
}

function* postCommentsSaga(): SagaIterator {
    yield takeLatest(actionTypes.POST_COMMENTS_REQUEST, fetchPostComments);
}

export default postCommentsSaga;