
import { actionTypes, postRequestSuccess, postRequestFailure } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';
import { PostModel } from './state';
import { getPosts } from '../../../api/blogApi';

function* fetchPosts() {
    try {
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