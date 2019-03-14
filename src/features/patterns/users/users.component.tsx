import React, { useEffect, FunctionComponent } from 'react'
import { UserModel } from './models';
import { useUsersState } from './hooks/useUsersState';

type Props = UserModel[];

const Users: FunctionComponent<Props> = () => {
    const { users, getUsersRequest, error, loadingUsers } = useUsersState([]);

    useEffect(() => {
        getUsersRequest();
    }, []);

    return (
        <div>
            <h3>Users</h3>
            {
                loadingUsers ?
                    'Loading...'
                    :
                    users.map(u => <div key={u.id.toString()}>
                        {u.name}
                    </div>)
            }
            {error && <div>{error}</div>}
        </div>
    )
}

export default Users
