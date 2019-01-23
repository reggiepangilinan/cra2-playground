
import { actionTypes, IPostCommentsRequestAction, postCommentsRequestSuccess, postCommentsRequestFailure } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';
import { PostCommentModel } from './state';
import { getPostComments } from '../../../api/blogApi';

function* fetchPostComments(action: IPostCommentsRequestAction) {
    try {
        const response: AxiosResponse<PostCommentModel[]> = yield call(getPostComments, action.postId)
        yield put(postCommentsRequestSuccess(response.data));
    } catch (e) {
        yield put(postCommentsRequestFailure(e.message));
    }
}

function* postCommentsSaga(): SagaIterator {
    yield takeLatest(actionTypes.POST_COMMENTS_REQUEST, fetchPostComments);
}

export default postCommentsSaga;