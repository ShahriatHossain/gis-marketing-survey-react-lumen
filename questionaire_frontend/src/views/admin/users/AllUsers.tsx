import React, { useEffect } from "react";
import NoUsersFound from "../../../components/admin/users/NoUsersFound";
import UserList from "../../../components/admin/users/UserList";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { getAllUsers } from "../../../lib/user-api";

const AllUsers: React.FC = () => {
    const { sendRequest, status, data: loadedUsers, error } = useHttpWithParam(
        getAllUsers,
        true
    );

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    const refreshRecordHandler = () => {
        sendRequest();
    }

    if (status === 'pending') {
        return (
            <React.Fragment>
                <LoadingSpinner />
            </React.Fragment>
        );
    }

    if (error) {
        return <p className='centered focused'>{error}</p>;
    }

    if (status === 'completed' && (!loadedUsers || loadedUsers.length === 0)) {
        return <NoUsersFound />;
    }


    return <UserList users={loadedUsers} onRefreshRecord={refreshRecordHandler} />;
}

export default AllUsers;