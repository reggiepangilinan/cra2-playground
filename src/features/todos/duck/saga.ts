import postsApi, { TODOS } from '../../../common/api/blogApi';
import { TodoModel } from './reducer';
import { actionTypes, ITodosRequestAction, todosRequestFailure, todosRequestSuccess, todosRequestPending } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

function* fetchTodos(action: ITodosRequestAction) {
    try {
        yield put(todosRequestPending());

        const getPosts = (): AxiosPromise<TodoModel[]> => postsApi.get(TODOS);

        const response: AxiosResponse<TodoModel[]> = yield call(getPosts)

        yield put(todosRequestSuccess(response.data));

    } catch (e) {
        yield put(todosRequestFailure(e.message));
    }
}

function* todosSaga(): SagaIterator {
    yield takeLatest(actionTypes.TODOS_REQUEST, fetchTodos);
}

export default todosSaga;