import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import EditUserForm from "../../../components/admin/users/EditUserForm";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { editUser, getSingleUser } from "../../../lib/user-api";
import AuthContext from "../../../store/auth-context";
import { getStorageUserProfile } from "../../../utils/helpers/utility-functions";

const EditUser: React.FC = () => {
    const { sendRequest: sendRequestForEdit, status: statusForEdit } = useHttpWithParam(editUser);
    const authCtx = useContext(AuthContext);
    const currentUser = getStorageUserProfile();
    
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
            history.push('/customer/dashboard');
        }
    }, [statusForEdit, history]);

    const editUserHandler = (userData: any) => {
        sendRequestForEdit(userData);

        if (loadedUser && currentUser && currentUser.id === +userId) {
            loadedUser['email'] = userData['email'];
            loadedUser['name'] = userData['name'];
            authCtx.setProfile(loadedUser);
        }
    };

    return loadedUser && <EditUserForm existingData={loadedUser} isLoading={statusForEdit === 'pending'} onEditUser={editUserHandler} />;
};

export default EditUser;