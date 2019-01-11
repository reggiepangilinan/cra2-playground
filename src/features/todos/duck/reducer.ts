
import { actionTypes, ITodosRequestAction } from './actions';
import { Reducer } from 'redux';

export type TodoModel = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

export type TodosState = {
    todos: TodoModel[],
    error?: string,
    requestPending: boolean
};



const initialState: TodosState = {
    todos: [],
    requestPending: false
}

const postsReducer: Reducer<TodosState, ITodosRequestAction> = (
    state: TodosState = initialState,
    action: ITodosRequestAction
) => {
    switch (action.type) {

        case actionTypes.TODOS_REQUEST_PENDING:
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

        default:
            return state;
    }
};
export default postsReducer;

