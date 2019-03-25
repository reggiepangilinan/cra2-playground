import React, { useEffect, FunctionComponent } from 'react'
import { IDispatchProps } from './todos.container';
import { TodosState } from './duck/state';
import { Table, TableHead, TableHeader, TableRow, TableCell } from '../../../common/components/Table';
import Loader from '../../../common/components/Loader';

type Props = TodosState & IDispatchProps;

const Todos: FunctionComponent<Props> = (props: Props) => {

    useEffect(() => {
        props.todosRequest();
        return () => {
            props.todosCleanup();
        }
    }, [])

    if (props.requestPending)
        return <Loader fillcontainer/>

    if (props.error)
        return <div>{props.error}</div>

    return (
        <div>
            <h2>Todos</h2>
            <Table height="600px">
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
        </div>
    )
}

export default Todos
