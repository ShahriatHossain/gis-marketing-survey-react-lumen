import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewUserForm from "../../../components/admin/users/NewUserForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { addUser } from "../../../lib/user-api";
import { getAllBusinessTypes } from "../../../lib/business-type-api";

const NewUser: React.FC = () => {
    const { sendRequest, status } = useHttpWithParam(addUser);
    const { sendRequest: sendRequestForBusinessTypes, data: loadedBusinessTypes } = useHttpWithParam(
        getAllBusinessTypes,
        true
    );
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/admin/users');
        }

        sendRequestForBusinessTypes();
    }, [status, history, sendRequestForBusinessTypes]);

    const addUserHandler = (userData: any) => {
        sendRequest(userData);
    };

    return <NewUserForm isLoading={status === 'pending'} businessTypes={loadedBusinessTypes} onAddUser={addUserHandler} />;
};

export default NewUser;