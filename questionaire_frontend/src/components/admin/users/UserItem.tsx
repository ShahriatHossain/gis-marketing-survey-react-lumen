import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { deleteUser } from "../../../lib/user-api";
import { hideBootstrapModal } from "../../../utils/helpers/utility-functions";
import { ModalParam } from "../../../utils/models/ModalParam";
import { User } from "../../../utils/models/User";
import ModalButtonLink from "../../UI/ModalButtonLink";
import ModalUI from "../../UI/ModalUI";

const UserItem: React.FC<{ user: User, onDeleteUser: Function }> = ({ user, onDeleteUser }) => {
    const { sendRequest: sendRequestForDelete, status: statusForDelete } = useHttpWithParam(deleteUser);

    const history = useHistory();

    const modalParam: ModalParam = {
        title: "Do you want to delete this record?",
        modalId: `userDelete__${user.id}`,
        actionButtonText: "Delete",
        bodyText: ""
    };

    useEffect(() => {
        if (statusForDelete === 'completed') {
            hideBootstrapModal(`${modalParam.modalId}`);
            onDeleteUser(user.id);
        }
    }, [statusForDelete, history]);

    const deleteItemHandler = (userId: string) => {
        sendRequestForDelete(userId);
    }

    return (
        <React.Fragment>
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.created_at}</td>
                <td>{user.updated_at}</td>
                <td>
                    <div className="width-70px">
                        <NavLink className="btn btn-primary btn-sm" to={'/admin/edit-user/' + user.id}>
                            <i className="fas fa-pen"></i>
                        </NavLink>&nbsp;
                        <ModalButtonLink targetId={modalParam.modalId}><i className="far fa-trash-alt"></i></ModalButtonLink>
                    </div>
                    <ModalUI modalParam={modalParam} onActionItem={deleteItemHandler} />
                </td>
            </tr>
        </React.Fragment>
    );
}

export default UserItem;