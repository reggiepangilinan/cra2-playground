import React, { useEffect, FunctionComponent } from 'react'
import { IDispatchProps } from './todos.container';
import { TodosState } from './duck/state';
import { Table, TableHead, TableHeader, TableRow, TableCell } from '../../../common/components/Table';

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
                    <Table height="560px">
                        {{
                            header:
                                <TableHead>
                                    <TableHeader align="center" label="Id" />
                                    <TableHeader align="center" label="User Id" />
                                    <TableHeader label="Title" />
                                    <TableHeader label="Completed?" />
                                </TableHead>,
                            rows: props.todos.map(p =>
                                <TableRow key={p.id.toString()}>
                                        <TableCell align="center" >{p.id}</TableCell>
                                        <TableCell align="center" >{p.userId}</TableCell>
                                        <TableCell>{p.title}</TableCell>
                                        <TableCell>{p.completed}</TableCell>
                                </TableRow>)
                        }}

                    </Table>
            }
            {props.error && <div>{props.error}</div>}
        </div>
    )
}

export default Todos
