import React, { FunctionComponent, useState } from 'react'
import { IDispatchProps, } from './counter.container';
import { CounterState } from './duck/state';
import { useCounterValue } from '../../../common/hooks';
import IconButton from '../../../common/components/IconButton';
import { IconButtonKind } from '../../../common/types';

type Props = CounterState & IDispatchProps;

const Counter: FunctionComponent<Props> = (props: Props) => {

    const { count, setValue } = useCounterValue(0);

    return (
        <div>
            <h3>Counter</h3>
            <div>
                <h5>Redux based counter</h5>
                <h4>{props.count}</h4>
                <IconButton onClick={() => props.counterIncrement(1)} name="arrow_upward" type={IconButtonKind.Dark}/>
                <IconButton onClick={() => props.counterDecrement(1)} name="arrow_downward" type={IconButtonKind.Dark}/>
            </div>

            <div>
                <h5>Hooks based counter</h5>
                <h4>{count}</h4>
                <IconButton onClick={() => setValue(count + 1)} name="arrow_upward" type={IconButtonKind.Dark}/>
                <IconButton onClick={() => setValue(count - 1)} name="arrow_downward" type={IconButtonKind.Dark}/>
            </div>
            <NestedComponentReusingHook />
        </div>)
}

const NestedComponentReusingHook: FunctionComponent = () => {

    const { count, setValue } = useCounterValue(10);
    
    return (<div>
        <h5>Re-used hooks based counter</h5>
        <h4>{count}</h4>
        <IconButton onClick={() => setValue(count + 100, 2)} name="arrow_upward" type={IconButtonKind.Dark}/>
        <IconButton onClick={() => setValue(count - 1, 1.5)} name="arrow_downward" type={IconButtonKind.Dark}/>
    </div>);
}

export default Counter
