
import { actionTypes, ITodosRequestAction, todosRequestFailure, todosRequestSuccess, todosRequestPending } from './actions';
import { put, takeLatest, call } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import { AxiosResponse } from 'axios';
import { TodoModel } from './state';
import blogApi, { IBlogApi } from '../../../api/blogApi';

function* fetchTodos(action: ITodosRequestAction) {
    try {
        yield put(todosRequestPending());
 
        const api : IBlogApi = blogApi()
        const response: AxiosResponse<TodoModel[]> = yield call(api.getTodos)

        yield put(todosRequestSuccess(response.data));

    } catch (e) {
        yield put(todosRequestFailure(e.message));
    }
}

function* todosSaga(): SagaIterator {
    yield takeLatest(actionTypes.TODOS_REQUEST, fetchTodos);
}

export default todosSaga;