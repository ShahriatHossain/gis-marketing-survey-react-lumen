import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useHttpWithParam from "../../../hooks/use-httpWithParam";
import { deleteBusinessType } from "../../../lib/business-type-api";
import { hideBootstrapModal } from "../../../utils/helpers/utility-functions";
import { BusinessType } from "../../../utils/models/BusinessType";
import { ModalParam } from "../../../utils/models/ModalParam";
import ModalButtonLink from "../../UI/ModalButtonLink";
import ModalUI from "../../UI/ModalUI";

const BusinessTypeItem: React.FC<{ businessType: BusinessType, onDeleteBusinessType: Function }> = ({ businessType, onDeleteBusinessType }) => {
    const { sendRequest: sendRequestForDelete, status: statusForDelete } = useHttpWithParam(deleteBusinessType);

    const history = useHistory();

    const modalParam: ModalParam = {
        title: "Do you want to delete this record?",
        modalId: `businessTypeDelete__${businessType.id}`,
        actionButtonText: "Delete",
        bodyText: ""
    };

    useEffect(() => {
        if (statusForDelete === 'completed') {
            hideBootstrapModal(`${modalParam.modalId}`);
            onDeleteBusinessType(businessType.id);
        }
    }, [statusForDelete, history]);

    const deleteItemHandler = (businessTypeId: string) => {
        sendRequestForDelete(businessTypeId);
    }

    return (
        <React.Fragment>
            <tr key={businessType.id}>
                <td>{businessType.name}</td>
                <td>{businessType.description}</td>
                <td>{businessType.created_at}</td>
                <td>{businessType.updated_at}</td>
                <td>
                    <NavLink className="btn btn-primary btn-sm" to={'/admin/edit-business-type/' + businessType.id}>
                    <i className="fas fa-pen"></i>
                    </NavLink>&nbsp;
                    <ModalButtonLink targetId={modalParam.modalId}><i className="far fa-trash-alt"></i></ModalButtonLink>
                    <ModalUI modalParam={modalParam} onActionItem={deleteItemHandler} />
                </td>
            </tr>
        </React.Fragment>
    );
}

export default BusinessTypeItem;