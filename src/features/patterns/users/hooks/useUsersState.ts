import { useState } from "react";
import { UserModel } from "../models";
import { getUsers } from "../../../../api/blogApi";
import { AxiosError } from "axios";

export const useUsersState = (initialValue: UserModel[]) => {
    const [{ users, loadingUsers }, setUsersValue] = useState({ users: initialValue, loadingUsers: false });
    const [error, setError] = useState('');

    const getUsersRequest = () => {
        setUsersValue({ users: [], loadingUsers: true });
        getUsers().then(response => {
            setUsersValue({ users: response.data, loadingUsers: false });
        }).catch((err: AxiosError) => {
            setError(`${err.message}`);
            setUsersValue({ users: [], loadingUsers: false });
        });
    }

    return {
        users,
        error,
        loadingUsers,
        getUsersRequest
    }
}