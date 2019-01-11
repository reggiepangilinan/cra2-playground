import postsApi, { POSTS, COMMENTS } from '../../../common/api/blogApi';
import { PostCommentModel } from './reducer';
import { actionTypes, IPostCommentsRequestAction, postCommentsRequestSuccess, postCommentsRequestFailure, postCommentsRequestPending } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

function* fetchPostComments(action: IPostCommentsRequestAction) {
    try {
        yield put(postCommentsRequestPending());

        const getPostComments = (): AxiosPromise<PostCommentModel[]> => postsApi.get(`${POSTS}/${action.postId}/${COMMENTS}`);

        const response: AxiosResponse<PostCommentModel[]> = yield call(getPostComments)

        yield put(postCommentsRequestSuccess(response.data));

    } catch (e) {
        yield put(postCommentsRequestFailure(e.message));
    }
}

function* postCommentsSaga(): SagaIterator {
    yield takeLatest(actionTypes.POST_COMMENTS_REQUEST, fetchPostComments);
}

export default postCommentsSaga;