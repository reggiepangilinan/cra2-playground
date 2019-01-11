import React, { useEffect } from 'react'
import Todo from './todo.component';
import { TodosState } from './duck/reducer';
import { IDispatchProps } from './todos.container';

type Props = TodosState & IDispatchProps;

const Todos = (props: Props) => {
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
