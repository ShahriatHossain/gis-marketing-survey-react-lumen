import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewUserForm from "../../../components/admin/users/NewUserForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addUser } from "../../../lib/user-api";

const NewUser: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addUser);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/users');
        }
    }, [status, history]);

    const addUserHandler = (userData: any) => {
        sendRequest(userData);
    };

    return <NewUserForm isLoading={status === 'pending'} onAddUser={addUserHandler} />;
};

export default NewUser;