import postsApi, { POSTS } from './../../../common/api/blogApi';
import { PostModel } from './reducer';
import { actionTypes, IPostRequestAction, postRequestSuccess, postRequestFailure, postRequestPending } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

function* fetchPosts(action: IPostRequestAction) {
    try {
        yield put(postRequestPending());

        const getPosts = (): AxiosPromise<PostModel[]> => postsApi.get(POSTS);

        const response: AxiosResponse<PostModel[]> = yield call(getPosts)

        yield put(postRequestSuccess(response.data));

    } catch (e) {
        yield put(postRequestFailure(e.message));
    }
}

function* postsSaga(): SagaIterator {
    yield takeLatest(actionTypes.POSTS_REQUEST, fetchPosts);
}

export default postsSaga;