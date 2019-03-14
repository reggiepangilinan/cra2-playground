import React, { FunctionComponent, useState } from 'react'
import { IDispatchProps, } from './counter.container';
import { CounterState } from './duck/state';
import { useCounterValue } from '../../../common/hooks';

type Props = CounterState & IDispatchProps;

const Counter: FunctionComponent<Props> = (props: Props) => {

    const { count, setValue } = useCounterValue(0);

    return (
        <div>
            <h3>Counter</h3>
            <div>
                <h5>Redux based counter</h5>
                <h4>{props.count}</h4>
                <button onClick={() => props.counterIncrement(1)}> + </button>
                <button onClick={() => props.counterDecrement(1)}> - </button>
            </div>

            <div>
                <h5>Hooks based counter</h5>
                <h4>{count}</h4>
                <button onClick={() => setValue(count + 1)}> + </button>
                <button onClick={() => setValue(count - 1)}> - </button>
            </div>
            <NestedComponentReusingHook />
        </div>)
}

const NestedComponentReusingHook: FunctionComponent = () => {

    const { count, setValue } = useCounterValue(10);
    
    return (<div>
        <h5>Re-used hooks based counter</h5>
        <h4>{count}</h4>
        <button onClick={() => setValue(count + 100, 2)}> + </button>
        <button onClick={() => setValue(count - 1, 1.5)}> - </button>
    </div>);
}

export default Counter
