import React, { useEffect, FunctionComponent } from 'react'
import Todo from './todo.component';
import { IDispatchProps } from './todos.container';
import { TodosState } from './duck/state';

type Props = TodosState & IDispatchProps;

const Todos: FunctionComponent<Props> = (props: Props) => {
    useEffect(() => {
        props.todosRequest();
    }, [])
    return (
        <div>
            <h3>Todos</h3>
            {
                props.requestPending ?
                    'Loading...'
                    :
                    props.todos.map(p => <Todo key={p.id.toString()}{...p} />)
            }
            {props.error && <div>{props.error}</div>}
        </div>
    )
}

export default Todos