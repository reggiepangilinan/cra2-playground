
import { actionTypes, ICounterAction } from './actions';
import { Reducer } from 'redux';

export type CounterState = {
    count: number,
    error?: string
};

const initialState: CounterState = {
    count: 0
}

const counterReducer: Reducer<CounterState, ICounterAction> = (
    state: CounterState = initialState,
    action: ICounterAction
) => {
    switch (action.type) {

        case actionTypes.COUNTER_INCREMENT:
            return Object.assign({}, state, <CounterState>({
                count: state.count + action.value
            }));

        case actionTypes.COUNTER_DECREMENT:
            return Object.assign({}, state, <CounterState>({
                count: state.count - action.value
            }));

        default:
            return state;
    }
};
export default counterReducer;

