
import { actionTypes, IPostRequestAction, postRequestSuccess, postRequestFailure, postRequestPending } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';
import { PostModel } from './state';
import blogApi, { IBlogApi } from '../../../api/blogApi';

function* fetchPosts(action: IPostRequestAction) {
    try {
        yield put(postRequestPending());

        const api : IBlogApi = blogApi()

        const response: AxiosResponse<PostModel[]> = yield call(api.getPosts)

        yield put(postRequestSuccess(response.data));

    } catch (e) {
        yield put(postRequestFailure(e.message));
    }
}

function* postsSaga(): SagaIterator {
    yield takeLatest(actionTypes.POSTS_REQUEST, fetchPosts);
}

export default postsSaga;