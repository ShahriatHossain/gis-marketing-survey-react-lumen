import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditUserForm from "../../../components/admin/users/EditUserForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editUser, getSingleUser } from "../../../lib/user-api";

const EditUser: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editUser);
    
    const history = useHistory();

    const params = useParams();

    const { userId }: any = params;

    const { sendRequest: sendRequestForDetails, status: statusForDetails, data: loadedUser, error } = useHttpWithParam(
        getSingleUser,
        true
    );

    useEffect(() => {
        sendRequestForDetails(userId);
    }, [sendRequestForDetails, userId]);

    useEffect(() => {
        if (statusForEdit === 'completed') {
            history.push('/admin/users');
        }
    }, [statusForEdit, history]);

    const editUserHandler = (userData: any) => {
        sendRequestForEdit(userData);
    };

    return loadedUser && <EditUserForm existingData={loadedUser} isLoading={statusForEdit === 'pending'} onEditUser={editUserHandler} />;
};

export default EditUser;