import React, { FunctionComponent } from 'react'
import { UserModel } from './models';
import useAsync from 'react-use/lib/useAsync';
import { getUsers } from '../../../api/blogApi';

type Props = UserModel[];

const Users: FunctionComponent<Props> = () => {
    const {loading, value: response, error} = useAsync(getUsers);
    return (
        <div>
            <h2>Users</h2>
            {
                loading ?
                    <div>Loading...</div>
                    :
                    response && response.data.map(u => 
                    <div key={u.id.toString()}>
                        {u.name}
                    </div>)
            }
            {error && <div>{error.message}</div>}
        </div>
    )
}

export default Users
