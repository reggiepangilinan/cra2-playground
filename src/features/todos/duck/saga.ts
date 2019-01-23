
import { actionTypes, todosRequestFailure, todosRequestSuccess } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';
import { TodoModel } from './state';
import { getTodos } from '../../../api/blogApi';

function* fetchTodos() {
    try {
        const response: AxiosResponse<TodoModel[]> = yield call(getTodos)
        yield put(todosRequestSuccess(response.data));

    } catch (e) {
        yield put(todosRequestFailure(e.message));
    }
}

function* todosSaga(): SagaIterator {
    yield takeLatest(actionTypes.TODOS_REQUEST, fetchTodos);
}

export default todosSaga;