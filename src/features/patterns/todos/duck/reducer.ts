
import { actionTypes, ITodosRequestAction } from './actions';
import { Reducer } from 'redux';
import { TodosState } from './state';

const initialState: TodosState = {
    todos: [],
    requestPending: false
}

const postsReducer: Reducer<TodosState, ITodosRequestAction> = (
    state: TodosState = initialState,
    action: ITodosRequestAction
) => {
    switch (action.type) {

        case actionTypes.TODOS_REQUEST:
            return Object.assign({}, state, <TodosState>({
                requestPending: true
            }));

        case actionTypes.TODOS_REQUEST_SUCCESS:
            return Object.assign({}, state, <TodosState>({
                todos: action.todos,
                requestPending: false
            }));

        case actionTypes.TODOS_REQUEST_FAILURE:
            return Object.assign({}, state, <TodosState>({
                requestPending: false,
                error: action.error
            }));

        case actionTypes.TODOS_CLEANUP:
            return Object.assign({}, state, <TodosState>(initialState));

        default:
            return state;
    }
};
export default postsReducer;

