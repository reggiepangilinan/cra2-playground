import { Action } from "redux";

export enum actionTypes {
    COUNTER_INCREMENT = '@app/COUNTER/INCREMENT',
    COUNTER_DECREMENT = '@app/COUNTER/DECREMENT',

}

export interface ICounterAction extends Action {
    value: number
}

export const counterIncrement = (value: number): ICounterAction => ({
    type: actionTypes.COUNTER_INCREMENT,
    value
});

export const counterDecrement = (value: number): ICounterAction => ({
    type: actionTypes.COUNTER_DECREMENT,
    value
});

