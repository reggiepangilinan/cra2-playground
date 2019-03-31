import React, { FunctionComponent } from 'react'
import { UserModel } from './models';
import useAsync from 'react-use/lib/useAsync';
import { getUsers } from '../../../api/blogApi';
import Loader, { LoaderType } from '../../../common/components/Loader';

type Props = UserModel[];

const Users: FunctionComponent<Props> = () => {
    const { loading, value: response, error } = useAsync(getUsers);

    if (loading)
        return <Loader type={LoaderType.simple} fillcontainer />

    if (error)
        return <div>{error.message}</div>

    return (
        <div>
            <h2>Users</h2>
            {
                response && response.data.map(u =>
                    <div key={u.id.toString()}>
                        {u.name}
                    </div>)
            }
        </div>
    )
}

export default Users
