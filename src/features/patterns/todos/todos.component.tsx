import React, { useEffect, FunctionComponent } from 'react'
import Todo from './todo.component';
import { IDispatchProps } from './todos.container';
import { TodosState } from './duck/state';

type Props = TodosState & IDispatchProps;

const Todos: FunctionComponent<Props> = (props: Props) => {
    useEffect(() => {
        props.todosRequest();
        return () => {
            props.todosCleanup();
        }
    }, [])
    return (
        <div>
            <h2>Todos</h2>
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
