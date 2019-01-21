import React from 'react'
import { IDispatchProps, } from './counter.container';
import { CounterState } from './duck/state';

type Props = CounterState & IDispatchProps;

const Counter = (props: Props) => (<div>
    <h3>Counter</h3>
    <h4>{props.count}</h4>
    <button onClick={() => props.counterIncrement(1)}> + </button>
    <button onClick={() => props.counterDecrement(1)}> - </button>
</div>)

export default Counter
